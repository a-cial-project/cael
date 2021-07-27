<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Chats\Entry;
use App\Model\Chats\Message;
use App\Events\MessageSent;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;


class MessageController extends Controller
{
	public function store(Request $request)
	{
		$otherUser = Entry::select('flag')->where('room_id', $request->room_id)->where('user_id', '!=', Auth::user()->id)->first();

		$message = new Message;
		$message->user_id = Auth::user()->id;
		$message->room_id = $request->room_id;
		if(isset($request->message)){
			$message->message = $request->message;
		}elseif(isset($request->content)){
			// ここで動画か画像かを判断
			$contentjudge = pathinfo($request->file('content')->getClientOriginalName(), PATHINFO_EXTENSION);
			if($contentjudge == 'mp4'){
				$path = Storage::disk('s3')->putFile('/chat/movie', $request->content, 'public');
				$message->movie = Storage::disk('s3')->url($path);
			}else{
				$path = Storage::disk('s3')->putFile('/chat/content', $request->content, 'public');
				$message->content = Storage::disk('s3')->url($path);
			}
		}
		if($otherUser->flag == '0'){
			$message->status = '0';
		}
		$message->save();

		$message = Message::with('user')->find($message->id);
		//pusherの処理
		event(new MessageSent($message));
	}
}
