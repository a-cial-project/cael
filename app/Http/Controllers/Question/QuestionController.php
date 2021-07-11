<?php

namespace App\Http\Controllers\Question;

use App\Model\Questions\Question;
use App\Model\Questions\QuestionCategory;
use App\Model\Questions\QuestionImage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Storage;

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

    public function img_upload(Request $request){
        // s3へのアップロード 第一引数は任意のフォルダ名をつける
        $path = Storage::disk('s3')->putFile('/question', $request->image, 'public');
        // フルパスの取得
        return Storage::disk('s3')->url($path);
    }

    public function img_remove(Request $request){
        $url = 'question/'.$request->image;
        Storage::disk('s3')->delete($url);
    }
}
