<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Memos\MemoCategory;
use Faker\Generator as Faker;

$factory->define(MemoCategory::class, function (Faker $faker) {
    return [
    	'name' => $faker->lastName,
    ];
});
