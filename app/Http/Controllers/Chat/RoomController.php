<?php

namespace App\Http\Controllers\Chat;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Chats\Room;
use App\Model\Chats\Entry;
use App\Model\Chats\Message;

class RoomController extends Controller
{
	public function create(Request $request)
	{
		$room = new Room;
		$room->save();

		$currententry = new Entry;
		$currententry->user_id = Auth()->user()->id;
		$currententry->room_id = $room->id;
		$currententry->save();

		$opponententry = new Entry;
		$opponententry->user_id = $request->user;
		$opponententry->room_id = $room->id;
		$opponententry->save();

		return redirect(route('room.show', ['room' => $room->id]));
	}
  public function show($room)
  {
  	$messages = Message::with('user')->where('room_id', $room)->get();
  	return view('chats.show', ['messages' => $messages, 'room' => $room]);
  }
}
