<?php

use Illuminate\Database\Seeder;
use App\Model\Memos\MemoCategory;

class MemoCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	factory(MemoCategory::class, 11)->create();
    }
}
