<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\API\PassportController;



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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('users',[UserController::class,'create']);


Route::get('posts', [PostController::class,'index']);
Route::get('posts/{id}', [PostController::class,'show']);
//rota com os posts de um usuario pelo seu id
Route::get('userposts/{id}', [PostController::class,'listUserPosts']);
/*rota chamando comentarios de um post*/
Route::get('listcomment/{id}', [PostController::class,'listComment']);


Route::get('comments', [CommentController::class,'index']);
Route::get('comments/{id}', [CommentController::class,'show']);


Route::post('register', [PassportController::class, 'register']);
Route::post('login', [PassportController::class, 'login']);


Route::group(['middleware' => 'auth:api'], function() {
	// Passport Controller
    Route::get('logout', [PassportController::class, 'logout']);
    Route::get('getDetails', [PassportController::class, 'getDetails']);

    
    //User Controller
    Route::get('followcheck/{id}', [UserController::class,'followCheck']);
    Route::get('users', [UserController::class,'index']);
    Route::get('users/{id}', [UserController::class,'show']);
    Route::get('listfollowing/{id}', [UserController::class,'listFollowing']);
    Route::get('listfollowers/{id}', [UserController::class,'listFollowers']);
    Route::get('followingposts', [UserController::class,'listFollowingPosts']);
    //lista de outros usuarios
    Route::get('otherusers', [UserController::class,'otherUsers']);
    Route::post('follow/{id}', [UserController::class,'follow']);
    Route::post('unfollow/{id}', [UserController::class,'unfollow']);
    Route::post('likes/{id}',[UserController::class,'likes']);
    Route::put('users/{id}',[UserController::class,'update'])->middleware('user.owner');
    Route::delete('users/{id}',[UserController::class,'destroy'])->middleware('user.owner');
    Route::delete('dislikes/{id}',[UserController::class,'dislikes']);


    //Post Controller
    Route::post('posts',[PostController::class,'create']);
    Route::put('posts/{id}',[PostController::class,'update'])->middleware('post.owner');
    Route::delete('posts/{id}',[PostController::class,'destroy'])->middleware('post.admin');


    //Comment Controller
    Route::post('comments',[CommentController::class,'create']);
    Route::put('comments/{id}',[CommentController::class,'update'])->middleware('comment.owner');
    Route::delete('comments/{id}',[CommentController::class,'destroy'])->middleware('comment.admin');
    
});
