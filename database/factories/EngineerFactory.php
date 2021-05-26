<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Engineers\Engineer;
use Faker\Generator as Faker;

$factory->define(Engineer::class, function (Faker $faker) {
    return [
      'user_id' => 1,
      'name' => $faker->lastName,
      'engineer_category_id' => 1,
      'content' => $faker->realText(20),
      'start' => $faker->dateTimeBetween('1day', '2month')->format('Y-m-d'),
    ];
});
