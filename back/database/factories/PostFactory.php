<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'text' =>$this->faker->sentence($nbWords = 5,$variableNbWords = true),
            'likes' =>$this->faker->randomDigit(),
            'category' => $this->faker->randomElement($categories 
                                        = array('Escultura','Pintura', 'Musica', 'Dança')),
        ];
    }
}
