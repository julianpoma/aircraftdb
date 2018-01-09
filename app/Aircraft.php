<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aircraft extends Model
{
    protected $fillable = ['manufacturer', 'model', 'engines', 'range', 'ceiling'];
}
