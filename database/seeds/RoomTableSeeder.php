<?php

use Illuminate\Database\Seeder;
use App\Model\Chats\Room;

class RoomTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('rooms')->insert([
        [
          'id' => '1',
        ],
      ]);
    }
}
