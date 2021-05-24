<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
      'name' => $faker->lastName. ' ' . $faker->firstName,
      'birth' => $faker->dateTimeBetween('-40 years', '-20years')->format('Y-m-d'),
      'join' => $faker->dateTimeBetween('-40 years', '-20years')->format('Y-m-d'),
      'nickname' => $faker->name,
      'email' => $faker->email,
      'profile' => $faker->realText(20),
      'sport' => $faker->name,
      'password' => Hash::make('password'),
    ];
});
