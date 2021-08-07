<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Chats\Room;
use App\Model\Chats\Entry;
use App\Model\Chats\Message;
use App\Events\MessageSent;

class RoomController extends Controller
{
	public function create(Request $request)
	{
		$room = new Room;
		$room->save();

		$currententry = new Entry;
		$currententry->user_id = Auth()->user()->id;
		$currententry->room_id = $room->id;
		$currententry->flag = '0';
		$currententry->save();

		$opponententry = new Entry;
		$opponententry->user_id = $request->user;
		$opponententry->room_id = $room->id;
		$opponententry->flag = '1';
		$opponententry->save();

		return redirect(route('room.show', ['room' => $room->id]));
	}

	public function show($room)
	{
		$entry = Entry::where('room_id', $room)->where('user_id', Auth::user()->id)->first();
		$entry->flag = '0';
		$entry->save();
		$messages = Message::with('user')->where('room_id', $room)->latest('id')->limit(20)->get();
		// dd($messages->min('id'));

		$otherUser = Entry::select('user_id')->where('room_id', $room)->where('user_id', '!=', Auth::user()->id)->first();

		$othermessage = [];

		foreach($messages as $message){
			if(Auth::user()->id != $message->user_id){
				if($message->status == '1'){
					$message->status = '0';
					$message->save();
					$othermessage[] = $message;
				}
			}
		}

		return view('chats.show', ['messages' => $messages, 'room' => $room]);
		// if(count($othermessage) > 0){
		// 	event(new MessageSent($othermessage[0]));
		// }
	}

	public function flagchange(Request $request)
	{
		switch ($request->flag){
			case 'out':
				$entry = Entry::where('room_id', $request->room_id)->where('user_id', Auth::user()->id)->first();
				$entry->flag = '1';
				$entry->save();
				break;
			case 'in':
				$entry = Entry::where('room_id', $request->room_id)->where('user_id', Auth::user()->id)->first();
				$entry->flag = '0';
				$entry->save();
				$messages = Message::with('user')->where('room_id', $request->room_id)->get();

				$otherUser = Entry::select('user_id')->where('room_id', $request->room_id)->where('user_id', '!=', Auth::user()->id)->first();

				$othermessage = [];

				foreach($messages as $message){
					if(Auth::user()->id != $message->user_id){
						if($message->status == '1'){
							$message->status = '0';
							$message->save();
							$othermessage[] = $message;
						}
					}
				}
				break;
		}
	}

	public function infinitescroll(Request $request)
	{
		$messages = Message::with('user')->where('room_id', $request->room_id)->latest('id')->where('id', '<', $request->min)->limit(20)->get();
		return $messages;
	}
}
