<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Model\Sports\Sport;

class SportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(Sport::class, 11)->create();
    }
}
