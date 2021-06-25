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
         return view("questions/create");
    }

    public function index(Request $request){
        $categories = QuestionCategory::all();
        $request_category = $request->input("status");
        $status = isset($request_category) ? $request_category : 0;
        $current_category = QuestionCategory::find($request->input("question_category_id")) ?? 0;
        if ($current_category === 0) {
            $questions = Question::where("status", $status)->get();
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

    public function store(Request $request){
        return view("questions/question_info",["editor" => $request]);
    }
}
