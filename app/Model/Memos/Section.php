<?php

namespace App\Model\Memos;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
  public function memo()
  {
    return $this->belongsTo('App\Model\Memos\Memo');
  }

  public function section_contents()
  {
    return $this->hasMany('App\Model\Memos\SectionContent');
  }
}
