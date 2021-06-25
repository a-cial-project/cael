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

  public function sport_category()
  {
    return $this->belongsTo('App\Model\Sports\SportCategory');
  }

  protected $fillable = [
      'name',
      'sport_category_id',
      'content',
      'date',
      'limit',
      'status',
  ];
}

