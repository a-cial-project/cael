<?php

namespace App\Http\Controllers\Sport;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Traits\Favorite;
use App\Model\Sports\SportFavorite;

class SportFavoriteController extends Controller
{
	use Favorite;
	public function store(Request $request)
	{
		$favorite = $this->favoritecheck('App\Model\Sports\SportFavorite', 'sport_id', $request->result_id);
		$judge = [];

		if(is_null($favorite)){
			$sportfavorite = new SportFavorite();
			$sportfavorite->user_id = Auth::user()->id;
			$sportfavorite->sport_id = $request->result_id;
			$sportfavorite->save();
			$judge[] = true;
		}else{
			SportFavorite::where('user_id', Auth::user()->id)->where('sport_id', $request->result_id)->delete();
			$judge[] = false;
		}
		$judge[] = $this->favoritecount('App\Model\Sports\SportFavorite', 'sport_id', $request->result_id);
		if(!is_null($request->order_id)){
		  $judge[] = $request->order_id;
		}
    return $judge;
	}
}
