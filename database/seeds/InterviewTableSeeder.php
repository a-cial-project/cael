<?php

use Illuminate\Database\Seeder;
use App\Model\Interviews\Interview;
use Faker\Factory as Faker;

class InterviewTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(Interview::class, 30)->create();
    }
}
