<?php

use Illuminate\Database\Seeder;
use App\Model\Engineers\Engineer;

class EngineerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	factory(Engineer::class, 11)->create();
    }
}
