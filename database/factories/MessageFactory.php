<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Chats\Message;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
    return [
    	'user_id' => 12,
    	'room_id' => 1,
    	'message' => $faker->realText(20),
    	'status' => 1,
    ];
});
