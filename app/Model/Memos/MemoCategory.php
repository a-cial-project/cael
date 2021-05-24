<?php

namespace App\Model\Memos;

use Illuminate\Database\Eloquent\Model;

class MemoCategory extends Model
{
  public function memos()
  {
    return $this->hasMany('App\Model\Memos\Memo');
  }
}
