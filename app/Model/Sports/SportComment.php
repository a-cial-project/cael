<?php

namespace App\Model\Sports;

use Illuminate\Database\Eloquent\Model;

class SportComment extends Model
{
  public function user()
  {
    return $this->belongsTo('App\Model\User');
  }
}
