<?php

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

Route::get('/', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);
Route::get('/contact', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);
Route::get('/resume', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);
Route::get('/todo', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);
Route::get('/calculator', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);
Route::get('/stopwatch', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);
Route::get('/projects', [
    'uses' => 'HomeController@index',
    'as' => 'home',
]);

Route::post('/sendMail', [
    'uses' => 'HomeController@sendMail',
    'as' => 'mail',
]);
