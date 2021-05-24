<?php

namespace App\Model\Sports;

use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
  public function user()
  {
    return $this->belongsTo('App\Model\User');
  }

  public function sport_favorites()
  {
    return $this->hasMany('App\Model\Sports\SportFavorite');
  }
}
