<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/aircraft', [
    'uses' => 'AircraftsController@all',
    'middleware' => 'jwt.auth'
]);

Route::get('/aircraft/{id}', [
    'uses' => 'AircraftsController@show',
    'middleware' => 'jwt.auth'
]);

Route::post('/aircraft', [
    'uses' => 'AircraftsController@new',
    'middleware' => 'jwt.auth'
]);

Route::put('/aircraft/{id}', [
    'uses' => 'AircraftsController@edit',
    'middleware' => 'jwt.auth'
]);

Route::delete('/aircraft/{id}', [
    'uses' => 'AircraftsController@delete',
    'middleware' => 'jwt.auth'
]);

Route::post('/login', [
    'uses' => 'UserController@login'
]);

Route::get('/user', [
    'uses' => 'UserController@getUser',
    'middleware' => 'jwt.auth'
]);

Route::get('/logout', [
    'uses' => 'UserController@logout',
    'middleware' => 'jwt.auth'
]);

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });