<?php

namespace App\Http\Controllers\Question;

use App\Model\Questions\Question;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function create() {
        return view("questions/create");
    }

    public function index(int $id){
        $questions = Question::all();
        // キーがviewページで変数名として使用できる
        // 引数でidを取得しcurrent表示する（current_question_id）としてviewに渡す
        return view("questions/index",[
            "questions" => $questions,
            "current_question_id" => $id,
        ]);
    }
}
