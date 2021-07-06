<?php

namespace App\Model\Memos;

use Illuminate\Database\Eloquent\Model;

class MemoStock extends Model
{
	public function memo()
	{
		return $this->belongsTo('App\Model\Memos\Memo');
	}
}
