<?php

namespace App\Model\Chats;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
  public function user()
  {
    return $this->belongsTo('App\Model\User');
  }
}
