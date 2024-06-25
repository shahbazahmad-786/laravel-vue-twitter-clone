<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TweetController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'getUser']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::prefix('tweets')->controller(TweetController::class)->group(function () {
        Route::get('/', 'index');
        Route::get('/search', 'search');
        Route::get('/profile', 'getForProfile');
        Route::get('/people/{user}', 'getForPeople');
        Route::post('/', 'store');
        Route::get('/{tweet}', 'show');
        Route::delete('/{tweet}', 'destroy');
    });
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
