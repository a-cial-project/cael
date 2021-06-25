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
    return $this->hasMany('App\Model\Engineers\EngineerFavorite');
  }

  public function engineer_category()
  {
    return $this->belongsTo('App\Model\Engineers\EngineerCategory');
  }

  protected $fillable = [
      'name',
      'engineer_category_id',
      'content',
      'start',
      'git_hub_url',
  ];
}