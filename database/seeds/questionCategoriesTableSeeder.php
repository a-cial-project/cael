<?php

use Illuminate\Database\Seeder;
// モデル連結
use App\Model\Questions\QuestionCategory;

class questionCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
        
        foreach($category as $val) {
            DB::table("question_categories")->insert([
                "name" => $val,
            ]);
        }
    }
}
