<?php

namespace App\Model\Memos;

use Illuminate\Database\Eloquent\Model;

class Memo extends Model
{

  public function user()
  {
    return $this->belongsTo('App\Model\User');
  }

  public function sections()
  {
    return $this->hasMany('App\Model\Memos\Section');
  }

  public function memo_category()
  {
    return $this->belongsTo('App\Model\Memos\MemoCategory');
  }

  static function escape($code)
  {
    $pattern = '/{/';
      $code = preg_replace_callback(
                $pattern,
                function($matches){
                  return '{&#8203;';
                },
                $code
              );

    $pattern = '/}/';
      $code = preg_replace_callback(
                $pattern,
                function($matches){
                  return '&#8203;}';
                },
                $code
              );
      return $code;
  }
}
