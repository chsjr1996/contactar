<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SettingsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::inertia('/', 'Home/about');

Route::prefix('/contact')->group(function () {
    Route::inertia('/', 'Contact/form');
    Route::post('/', [ContactController::class, 'send'])->name('contact.send');
});

Route::prefix('/settings')->group(function () {
    Route::post('/language', [SettingsController::class, 'switchLang'])->name('settings.switch.lang');
});
