<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuestionImage extends Model
{
    //
    public function question(){
       return $this->belongs_to("App/Model/Questions/Question")
    }
}
