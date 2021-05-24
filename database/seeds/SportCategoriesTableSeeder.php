<?php

use Illuminate\Database\Seeder;
use App\Model\Sports\SportCategory;


class SportCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(SportCategory::class, 11)->create();
    }
}
