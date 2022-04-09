<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'is_admin' => $this->faker->boolean($chanceOfGettingTrue = 50),
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => bcrypt('123'),
            'category' => $this->faker
                    ->randomElement($categories 
                    =array('Escultura','Pintura', 'Musica', 'Dança')),
            'bio' => $this->faker->sentence($nbWords = 5,$variableNbWords = true),

        ];
    }
}
