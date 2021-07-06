<?php

namespace App\Model\Engineers;

use Illuminate\Database\Eloquent\Model;
use Auth;

class EngineerFavorite extends Model
{
	public function user()
	{
		return $this->belongsTo('App\Model\User');
	}

	public function engineer()
	{
		return $this->belongsTo('App\Model\Engineers\Engineer');
	}
}
