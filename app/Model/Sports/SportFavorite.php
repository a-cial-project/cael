<?php

namespace App\Model\Sports;

use Auth;
use Illuminate\Database\Eloquent\Model;

class SportFavorite extends Model
{
	public function user()
	{
		return $this->belongsTo('App\Model\User');
	}

	public function sport()
	{
		return $this->belongsTo('App\Model\Sports\Sport');
	}
}
