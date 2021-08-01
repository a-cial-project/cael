<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Interviews\Interview;
use Faker\Generator as Faker;

$factory->define(Interview::class, function (Faker $faker) {
    return [
        //
        'user_id' => 1,
        'name' => $faker->realText(20),
        'nickname' => $faker->name,
        'interview_category_id' => 1,
        'profile' => $faker->realText(20),
        'sport' => $faker->name,
        'content' => $faker->realText(100),
    ];
});
