<?php

namespace App\Http\Controllers\Question;

use App\Model\Questions\Question;
use App\Model\Questions\QuestionCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class QuestionController extends Controller
{
    public function create() {
       
    }

    public function index(Request $request){
        $categories = QuestionCategory::all();
        $status = $request->input("status") ?? 0;
        $current_category = QuestionCategory::find($request->input("question_category_id")) ?? Question::where("status", $status)->get();
        // クラス名を判定する関数があれば使用したい
        if (count($current_category) != 1) {
            $questions = $current_category;

        }else{
            $questions = $current_category->questions()->where("status",$status)->get();
        }
        return view("questions/index",[
            "status" => $status,
            "questions" => $questions,
            "categories" => $categories,
            "current_category" => $current_category,
        ]);
    }

    public function question_info(){
        return view("questions/question_info");
    }
}
