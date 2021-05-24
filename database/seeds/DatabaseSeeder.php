<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      $this->call(UsersTableSeeder::class);
      $this->call(SportCategoriesTableSeeder::class);
      $this->call(SportsTableSeeder::class);
      $this->call(EngineerCategoryTableSeeder::class);
      $this->call(EngineerTableSeeder::class);
      $this->call(MemoCategoryTableSeeder::class);
    }
}
