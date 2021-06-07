<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Chats\Message;
use App\Events\MessageSent;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class MessageController extends Controller
{
	public function store(Request $request)
	{
    $message = new Message;
    $message->user_id = Auth::user()->id;
    $message->room_id = $request->room_id;
    if(isset($request->message)){
      $message->message = $request->message;
    }elseif(isset($request->content)){
      $contentjudge = pathinfo($request->file('content')->getClientOriginalName(), PATHINFO_EXTENSION);
      if($contentjudge == 'mp4'){
        $path = Storage::disk('s3')->putFile('/chat/movie', $request->content, 'public');
        $message->movie = Storage::disk('s3')->url($path);
      }else{
        $path = Storage::disk('s3')->putFile('/chat/content', $request->content, 'public');
        $message->content = Storage::disk('s3')->url($path);
      }
    }
    $message->save();

    $message = Message::with('user')->find($message->id);
    //pusherの処理
    event(new MessageSent($message));
	}
}
