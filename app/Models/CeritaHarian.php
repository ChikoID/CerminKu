<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CeritaHarian extends Model
{
    //

    protected $fillable = [
        'user_id',
        'message',
        'mood'
    ];
}
