<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Model\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(User::class, 11)->create();

      DB::table('users')->insert([
      'id' => '12',
      'name' => 'アーシャル',
      'birth' => '2000-01-01',
      'join' => '2020-01-01',
      'email' => 'a-cial@co.jp',
      'nickname' => 'AAT',
      'profile' => 'アーシャルデザインです',
      'sport' => 'サッカー',
      'password' => bcrypt('test1234'),
      ]);
    }
}
