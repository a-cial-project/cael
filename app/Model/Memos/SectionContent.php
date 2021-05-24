<?php

namespace App\Model\Memos;

use Illuminate\Database\Eloquent\Model;

class SectionContent extends Model
{
  public function section()
  {
    return $this->belongsTo('App\Model\Memos\Section');
  }
}
