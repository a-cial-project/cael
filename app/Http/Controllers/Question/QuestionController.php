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

    public function index(){
        $questions = Question::all();
        return view("questions/index");
    }
}
