<?php
use Tymon\JWTAuth\Facades\JWTAuth;

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
    'logout',
    'blog',
];
$routePost = [
    'sendMail',
];
foreach ( $routeGet as $route ) {
    Route::get($route, [
        'uses' => 'HomeController@index',
        'as'   => 'home',
    ]);
}

Route::post('sendMail', [
    'uses' => 'HomeController@sendMail',
    'as'   => 'mail',
]);

Route::post('login', [
    'uses' => 'Auth\AuthenticateController@authenticate'
]);

Route::post('logout', [
    'uses' => 'Auth\LoginController@logout',
]);

Route::group(['prefix' => 'blog'],function (){
    Route::get('/', 'PostController@index');
    Route::get('show', 'PostController@show');
});

Route::group(['prefix' => 'api', 'jwt.auth'], function () {
    Route::post('store', 'PostController@store');
    Route::get('edit/{id}', 'PostController@edit');
    Route::post('update/{id}', 'PostController@update');
    Route::delete('destroy/{id}', 'PostController@destroy');
    Route::get('userinfo', function () {
        return JWTAuth::parseToken()->authenticate();
    });
});
//Route::get('/home', 'HomeController@index');
