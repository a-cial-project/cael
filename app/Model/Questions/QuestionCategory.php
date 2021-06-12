<?php

namespace App\Model\Questions;

use Illuminate\Database\Eloquent\Model;

class QuestionCategory extends Model
{
    //
    public function category(){
        $category = [
            "コーディング基礎",
            "Javascript/jQuery",
            "コーディング応用",
            "PHP基礎/アルゴリズム",
            "DB基礎",
            "PHP応用",
            "PHP自作",
            "Linux基礎/フレームワーク",
        ];
        return $category;
    }
}
