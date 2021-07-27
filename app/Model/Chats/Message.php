<?php

namespace App\Model\Chats;

use Illuminate\Database\Eloquent\Model;
use App\Enums\ChatStatus;

class Message extends Model
{
	protected $enumCasts = [
		'status' => ChatStatus::class,
	];

	public function user()
	{
		return $this->belongsTo('App\Model\User');
	}
}
