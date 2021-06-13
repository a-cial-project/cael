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
    // public function createForm(){
    //     return view("questions/create");
    // }

    public function index(Request $request){
        $status = $request->input("status") ?? 0;
        $current_category_id = $request->input("question_category_id") ?? 0;
        $question_categories = QuestionCategory::all();
        if ($status==1) {
            if ($current_category_id == 0) {
                $questions = Question::where("status", 1)->get();
            }else{
                $questions = Question::where("question_category_id",$current_category_id)->where("status",1)->get();
            }
        }elseif($status==0){
            if ($current_category_id == 0) {
                $questions = Question::where("status", 0)->get();
            }else{
                $questions = Question::where("question_category_id",$current_category_id)->where("status",0)->get();
            }
        }
        return view("questions/index",[
            "status" => $status,
            "questions" => $questions,
            "category" => $question_categories,
            "current_category_id" => $current_category_id,
        ]);
    }
}
