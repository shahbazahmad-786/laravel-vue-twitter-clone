<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'user_id', 'tweet', 'file', 'is_video'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
