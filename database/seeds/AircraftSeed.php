<?php

use Illuminate\Database\Seeder;

class AircraftSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['id' => 1, 'manufacturer' => 'Boeing', 'model' => '737-800', 'engines' => 'CFM56', 'range' => 2935, 'ceiling' => 41000],
            ['id' => 2, 'manufacturer' => 'Bombardier', 'model' => 'CRJ-700', 'engines' => 'CF34', 'range' => 1378, 'ceiling' => 41000],
            ['id' => 3, 'manufacturer' => 'Airbus', 'model' => 'A320', 'engines' => 'AIE V2500', 'range' => 3300, 'ceiling' => 41000],
        ];

        foreach ($items as $item) {
            \App\Aircraft::create($item);
        }
    }
}
