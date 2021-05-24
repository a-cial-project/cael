<?php

namespace App\Model\Engineers;

use Illuminate\Database\Eloquent\Model;

class EngineerComment extends Model
{
  public function user()
  {
    return $this->belongsTo('App\Model\User');
  }

  public function engineer()
  {
    return $this->belongsTo('App\Model\Engineers\Engineer');
  }
}
