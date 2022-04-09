<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        User::factory()->count(5)->create()->each(function($user){
            $posts = Post::factory()->count(2)->make();
            $comments = Comment::factory()->count(2)->make();

            $user->posts()->saveMany($posts);
            $user->comment()->saveMany($comments);

            $user->likes()->attach($posts);

            $user->usersFollowing()->attach(User::all()->random()->id);
            $user->usersFollowers()->attach(User::all()->random()->id);

            foreach ($posts as $post) {
                $post->comment()->saveMany($comments);
            }
        });

    }
}
