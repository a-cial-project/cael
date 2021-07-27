<?php

namespace App\Model\Questions;

use Illuminate\Database\Eloquent\Model;

class QuestionCategory extends Model
{
    //
    public function questions(){
        return $this->hasMany("App\Model\Questions\Question");
    }
}
