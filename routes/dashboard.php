<?php

use App\Http\Controllers\Dashboard\CeritaHarianController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {

    // Cerita Harian Route    
    Route::get('/dashboard/cerita', [CeritaHarianController::class, 'index'])->name('dashboard.cerita');
    Route::post('/cerita', [CeritaHarianController::class, 'store']);
    Route::delete('/cerita/{id}', [CeritaHarianController::class, 'destroy']);

    // Reflleksi Diri
    Route::get('/dashboard/refleksi', [])->name('dashboard.refleksi');
    Route::post('/refleksi', []);
    Route::delete('/refleksi/{id}', []);
});
