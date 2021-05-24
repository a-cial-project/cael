<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Sports\SportCategory;
use Faker\Generator as Faker;

$factory->define(SportCategory::class, function (Faker $faker) {
    return [
      'name' => $faker->lastName,
    ];
});
