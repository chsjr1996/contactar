<?php

namespace Database\Factories;

use App\Models\Contact;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Contact::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $brFaker = \Faker\Factory::create('pt_BR');

        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'phone' => $brFaker->phoneNumber(),
            'message' => $this->faker->text(100),
            'ip' => $this->faker->ipv4(),
            'file_name' => $this->faker->filePath()
        ];
    }
}
