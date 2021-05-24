<?php

namespace App\Http\Controllers\Sport;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Sports\SportComment;

class SportCommentController extends Controller
{
	public function store(Request $request)
	{
		try{
			$sportcomment = new SportComment;
			$sportcomment->user_id = $request->user_id;
			$sportcomment->sport_id = $request->type_value;
			$sportcomment->comment = $request->content;
			$sportcomment->save();

      $comment = [];
			$comment[] = SportComment::find($sportcomment->id);
			$comment[] = $comment[0]->user;
			return $comment;
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}
}
