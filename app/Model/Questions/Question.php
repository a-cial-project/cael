<?php

// 名前空間　上位ディレクトリまで記載
namespace App\Model\Questions;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    //
     public function question_category()
  {
    return $this->belongsTo('App\Model\Questions\QuestionCategory');
  }
    public function question_images(){
        return $this->hasMany("App\Model\Questions\QuestionImage");
    }
}
