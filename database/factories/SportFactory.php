<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Sports\Sport;
use Faker\Generator as Faker;

$factory->define(Sport::class, function (Faker $faker) {
    return [
      'user_id' => 1,
      'name' => $faker->lastName,
      'sport_category_id' => 1,
      'content' => $faker->realText(20),
      'date' => $faker->dateTimeBetween('1day', '2month')->format('Y-m-d'),
      'limit' => $faker->dateTimeBetween('1day', '2month')->format('Y-m-d'),
    ];
});
