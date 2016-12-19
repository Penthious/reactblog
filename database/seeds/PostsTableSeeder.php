<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'name' => '1st post',
            'body' => '1st body',
        ]);
        DB::table('posts')->insert([
            'name' => '2nd post',
            'body' => '2nd body',
        ]);
        DB::table('posts')->insert([
            'name' => '3rd post',
            'body' => '3rd body',
        ]);
    }
}
