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
    'uses' => 'AircraftsController@all'
]);

Route::get('/aircraft/{id}', [
    'uses' => 'AircraftsController@show'
]);

Route::post('/aircraft', [
    'uses' => 'AircraftsController@new'
]);

Route::put('/aircraft/{id}', [
    'uses' => 'AircraftsController@edit'
]);

Route::delete('/aircraft/{id}', [
    'uses' => 'AircraftsController@delete'
]);

Route::post('/login', [
    'uses' => 'UserController@login'
]);

Route::get('/user', [
    'uses' => 'UserController@getUser'
]);

Route::get('/logout', [
    'uses' => 'UserController@logout'
]);

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
