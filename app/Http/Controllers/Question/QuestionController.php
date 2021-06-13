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
        $status = $request->input("status") ?? 0 ;
        if ($status==1) {
            $questions = Question::where("status", 1)->get();
        }else{
            $questions = Question::where("status", 0)->get();
        }
        $QuestionCategories = QuestionCategory::all();
        // キーがviewページで変数名として使用できる
        // 引数でidを取得しcurrent表示する（current_question_id）としてviewに渡す
        return view("questions/index",[
            "status" => $status,
            "questions" => $questions,
            "category" => $QuestionCategories,
            "CurrentQuestionCategory" => 0,
        ]);
    }

    public function QuestionCategory(QuestionCategory $QuestionCategory, Request $request){
        $status = $request->input("status") ?? 0 ;
        if ($status==1) {
            $questions = $QuestionCategory->questions()->where("status",1)->get();
        }else{
            $questions = $QuestionCategory->questions()->where("status",0)->get();
        }
        $QuestionCategories = QuestionCategory::all();
        return view("questions/index",[
            "status" => $status,
            "questions" => $questions,
            "category" => $QuestionCategories,
            "CurrentQuestionCategory" => $QuestionCategory->id,
        ]);
    }
}
