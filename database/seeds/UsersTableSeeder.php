<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Tomas Leffew',
            'email' => 'tleffew1994@gmail.com',
            'password' => bcrypt('123456'),
        ]);
    }
}
