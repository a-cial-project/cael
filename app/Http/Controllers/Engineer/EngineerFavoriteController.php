<?php

namespace App\Http\Controllers\Engineer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Engineers\EngineerFavorite;
use App\Model\Traits\Favorite;

class EngineerFavoriteController extends Controller
{
	use Favorite;
	public function store(Request $request)
	{
		$favorite = $this->favoritecheck('App\Model\Engineers\EngineerFavorite', 'engineer_id', $request->result_id);
		$judge = [];

		if(is_null($favorite)){
			$engineerfavorite = new EngineerFavorite();
			$engineerfavorite->user_id = Auth::user()->id;
			$engineerfavorite->engineer_id = $request->result_id;
			$engineerfavorite->save();
			$judge[] = true;
		}else{
			EngineerFavorite::where('user_id', Auth::user()->id)->where('engineer_id', $request->result_id)->delete();
			$judge[] = false;
		}
		$judge[] = $this->favoritecount('App\Model\Engineers\EngineerFavorite', 'engineer_id', $request->result_id);
		if(!is_null($request->order_id)){
		  $judge[] = $request->order_id;
		}
    return $judge;
	}
}
