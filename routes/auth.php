<?php

use App\Http\Controllers\Auth\GoogleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('/auth/google', [GoogleController::class, 'redirect'])->name('google.redirect');
    Route::get('/auth/google/callback', [GoogleController::class, 'callback'])->name('google.callback');

    // Manual 
    Route::get('/login', function () {
        return Inertia::render('auth/login');
    });

    Route::get('/register', function () {
        return Inertia::render('auth/register');
    });
});
