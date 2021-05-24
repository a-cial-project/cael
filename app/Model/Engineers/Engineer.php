<?php

namespace App\Model\Engineers;

use Illuminate\Database\Eloquent\Model;

class Engineer extends Model
{
  public function user()
  {
    return $this->belongsTo('App\Model\User');
  }

  public function engineer_favorites()
  {
    return $this->hasMany('App\Model\Engineers\EngineersFavorite');
  }
}
