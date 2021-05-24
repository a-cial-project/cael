<?php
namespace App\Model\Traits;

use Illuminate\Support\Facades\DB;
use Auth;

trait Favorite
{
	public function favoritecheck($model, $value, $id)
	{
	  return $model::where('user_id', Auth::user()->id)->where($value, $id)->first();
	}

  public static function favoritecount($model, $value, $id)
  {
  	return $model::where($value, $id)->count();
  }
}