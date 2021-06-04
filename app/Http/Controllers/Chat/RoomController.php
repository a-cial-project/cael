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
		$room = null;
		$current_rooms = Entry::where('user_id', Auth::user()->id)->get();
		$opponent_rooms = Entry::where('user_id', $request->user)->get();
		foreach($current_rooms as $current_room){
			foreach($opponent_rooms as $opponent_room){
				if($current_room->room_id == $opponent_room->room_id){
					$room = Room::find($current_room->room_id);
					return redirect(route('room.show', ['room' => $room]));
				}
			}
		}
		if(is_null($room)){
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
	}
  public function show($room)
  {
  	$messages = Message::with('user')->where('room_id', $room)->get();
  	return view('chats.show', ['messages' => $messages, 'room' => $room]);
  }
}
