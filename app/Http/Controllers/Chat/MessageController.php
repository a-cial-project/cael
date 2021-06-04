<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Chats\Message;
use App\Events\MessageSent;

class MessageController extends Controller
{
	public function store(Request $request)
	{
    $message = new Message;
    $message->user_id = Auth::user()->id;
    $message->room_id = $request->room_id;
    $message->message = $request->message;
    $message->save();
    //pusherの処理
    event(new MessageSent($message));
	}
}
