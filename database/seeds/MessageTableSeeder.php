<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Model\Chats\Message;

class MessageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(Message::class, 50)->create();
    }
}
