<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Engineers\EngineerCategory;
use Faker\Generator as Faker;

$factory->define(EngineerCategory::class, function (Faker $faker) {
    return [
    	'name' => $faker->lastName,
    ];
});
