<?php

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->insert([
        [
          "user_id" => 12,
          "question_category_id" => 1,
          "title" => "コーディング基礎質問",
          "content" => "コーディング基礎内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  2,
          "title" => "jQuery質問",
          "content" => "jQuery内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  3,
          "title" => "コーディング応用質問",
          "content" => "コーディング応用内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  4,
          "title" => "PHP基礎質問",
          "content" => "PHP基礎内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  5,
          "title" => "DB基礎質問",
          "content" => "DB基礎内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  6,
          "title" => "PHP応用質問",
          "content" => "PHP応用内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  7,
          "title" => "PHP自作質問",
          "content" => "PHP応用内容",
        ],
         [
          "user_id" => 12,
          "question_category_id" =>  8,
          "title" => "Linux基礎質問",
          "content" => "Linux基礎内容",
        ],
      ]);
    }
}
