<?php

use Illuminate\Database\Seeder;
use App\Model\Engineers\EngineerCategory;

class EngineerCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	factory(EngineerCategory::class, 11)->create();
    }
}
