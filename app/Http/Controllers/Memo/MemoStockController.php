<?php

namespace App\Http\Controllers\Memo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Memos\MemoStock;
use Auth;
use App\Model\Traits\Favorite;

class MemoStockController extends Controller
{
	use Favorite;
	public function memostock(Request $request)
	{
		$favorite = $this->favoritecheck('App\Model\Memos\MemoStock', 'memo_id', $request->result_id);
		$judge = [];

		if(is_null($favorite)){
			$memostock = new MemoStock();
			$memostock->user_id = Auth::user()->id;
			$memostock->memo_id = $request->result_id;
			$memostock->save();
			$judge[] = true;
		}else{
			MemoStock::where('user_id', Auth::user()->id)->where('memo_id', $request->result_id)->delete();
			$judge[] = false;
		}
		$judge[] = $this->favoritecount('App\Model\Memos\MemoStock', 'memo_id', $request->result_id);
		if(!is_null($request->order_id)){
		  $judge[] = $request->order_id;
		}
    return $judge;
	}
}
