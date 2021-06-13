<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();

// ユーザーの登録と編集は管理者のみ可能
Route::group(['middleware' => ['auth', 'can:isAdmin']], function () {
  Route::resource('user','UserController')->only(['create', 'store']);
});

Route::group(['middleware' => 'auth'], function() {
  Route::get('/', 'HomeController@index')->name('home');
  // 社員閲覧機能
  Route::resource('user','UserController')->only(['show', 'edit', 'update']);
  // ユーザーお気に入り一覧
  Route::get('/user/{user}/{genre}', 'UserController@usergenre')->name('users.genre');
  // 社員検索機能
  Route::post('/usersearch', 'UserController@usersearch')->name('users.usersearch');
  // パスワード変更画面
  Route::get('/editpassword/{user}', 'UserController@editpassword')->name('users.editpassword');
  // パスワード変更処理
  Route::post('/updatepassword', 'UserController@updatepassword')->name('users.updatepassword');
  // スポーツ仲間募集機能
  Route::resource('sport', 'Sport\SportController')->only(['show', 'create', 'store', 'edit', 'update']);
  Route::post('sportsearch', 'Sport\SportController@search')->name('search');
  Route::resource('sportcomment', 'Sport\SportCommentController')->only(['store']);
  Route::resource('sportfavorite', 'Sport\SportFavoriteController')->only(['store']);
  // エンジニア仲間募集機能
  Route::resource('engineer', 'Engineer\EngineerController')->only(['index', 'show', 'create', 'store', 'edit', 'update']);
  Route::post('engineersearch', 'Engineer\EngineerController@search')->name('search');
  Route::resource('engineercomment', 'Engineer\EngineerCommentController')->only(['store']);
  Route::resource('engineerfavorite', 'Engineer\EngineerFavoriteController')->only(['store']);
  // Qiita機能
  Route::resource('memo', 'Memo\MemoController')->only(['show', 'create', 'store', 'edit', 'update']);
  Route::post('memosearch', 'Memo\MemoController@search')->name('memos.search');
  Route::post('/deletecontent', 'Memo\MemoController@deletecontent')->name('memos.deletecontent');
  Route::post('/memostock', 'Memo\MemoStockController@memostock')->name('memos.memostock');
  // 質問機能
  Route::resource('question', 'Question\QuestionController')->only(['show', 'create', 'store', 'edit', 'update','index']);
  // チャット機能
  Route::resource('room', 'Chat\RoomController')->only(['show', 'create']);
  Route::post('/flagchange', 'Chat\RoomController@flagchange')->name('rooms.flagchange');
  Route::resource('message', 'Chat\MessageController')->only(['store']);
});

