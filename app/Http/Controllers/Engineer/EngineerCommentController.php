<?php

namespace App\Http\Controllers\Engineer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Engineers\EngineerComment;

class EngineerCommentController extends Controller
{
	public function store(Request $request)
	{
		try{
			$engineercomment = new EngineerComment;
			$engineercomment->user_id = $request->user_id;
			$engineercomment->engineer_id = $request->type_value;
			$engineercomment->comment = $request->content;
			$engineercomment->save();

      $comment = [];
			$comment[] = EngineerComment::find($engineercomment->id);
			$comment[] = $comment[0]->user;
			return $comment;
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}
}
