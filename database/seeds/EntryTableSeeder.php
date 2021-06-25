<?php

use Illuminate\Database\Seeder;
use App\Model\Chats\Entry;

class EntryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('entries')->insert([
        [
          'user_id' => '12',
          'room_id' => '1',
          'flag' => '0',
        ],
        [
          'user_id' => '13',
          'room_id' => '1',
          'flag' => '0',
        ],
      ]);
    }
}
