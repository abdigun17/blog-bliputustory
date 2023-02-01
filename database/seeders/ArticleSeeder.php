<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        /*
        return[
            'category_id' => rand(1, 3),
            'user_id' => \App\Models\User::factory(),
            'title' => $title = $this->faker->sentence(),
            'slug' => str($title)->slug(),
            'teaser' => $this->faker->sentence(),
            'body' => $this->faker->sentence(),
        ];
        */


        \App\Models\User::factory(5)->hasArticles(15)->create();
        \App\Models\Article::get()->each(function ($article) {
            $article->tags()->attach(
                \App\Models\Tag::get()->random(rand(1,3))->pluck('id')
            );
        });
    }
}
