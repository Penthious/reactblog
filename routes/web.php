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
$routeGet = [
    '/',
    'contact',
    'resume',
    'todo',
    'clock',
    'calculator',
    'stopwatch',
    'projects',
    'login',
];
$routePost = [
  'sendMail',
];
foreach ($routeGet as $route){
    Route::get($route, [
        'uses' => 'HomeController@index',
        'as' => 'home',
    ]);
}

foreach ($routePost as $route){
    Route::post($route, [
        'uses' => 'HomeController@sendMail',
        'as' => 'mail',
    ]);
}
Route::post('login', [
    'uses' => 'Auth\LoginController@login',
]);
Route::post('logout', [
    'uses' => 'Auth\LoginController@logout',
]);

//Route::get('/home', 'HomeController@index');
