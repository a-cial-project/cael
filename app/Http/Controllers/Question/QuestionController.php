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

    public function index(){
        $questions = Question::all();
        $question_category = new QuestionCategory();
        $category = $question_category->category();
        // キーがviewページで変数名として使用できる
        // 引数でidを取得しcurrent表示する（current_question_id）としてviewに渡す
        return view("questions/index",[
            "questions" => $questions,
            "category" => $category,
        ]);
    }
}
