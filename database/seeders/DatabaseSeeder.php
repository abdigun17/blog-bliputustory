<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {


         \App\Models\User::factory()->create([
             'name' => 'Minku ya',
            'email' => 'minku@mail.com',
         ]);

         $this->call([
            CategorySeeder::class,
            TagSeeder::class,
            ArticleSeeder::class,
         ]);
        
    }
}
