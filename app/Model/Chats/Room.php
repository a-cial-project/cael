<?php

namespace App\Model\Chats;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Room extends Model
{
	static function roomCheck($user)
	{
		$current_rooms = Entry::where('user_id', Auth::user()->id)->get();
		$opponent_rooms = Entry::where('user_id', $user)->get();
		foreach($current_rooms as $current_room){
			foreach($opponent_rooms as $opponent_room){
				if($current_room->room_id == $opponent_room->room_id){
					$room = Room::find($current_room->room_id);
					return $room->id;
				}
			}
		}
	}
}
