<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;

use Auth;
class UserController extends Controller
{
    public function create(UserRequest $request){
        $user = new User;
        $user->createUser($request);
        return response()->json(new UserResource($user));
    }

    public function index(){
        $users = User::all();
        return response()->json(['user' => $users],200);
    }

    public function show($id){
        $user = User::findOrFail($id);
        return response()->json(['user' => $user],200);
    }
    
    public function update(UserRequest $request, $id){
        $user = User::find($id);
        $user->updateUser($request);
        return response()->json(new UserResource($user));
    }

    public function destroy($id){
        $user = User::find($id);
        $user->delete();
        return response()->json(['Usuario deletado com sucesso!'],200);
    }

    /**
     * likes a post
     * 
     * @param $id
     * 
     */
    public function likes($post_id){
        $user = Auth::user();
        $post = Post::find($post_id);
        if($post){

            if ($user->likes->contains($post)) {
                return response()->json(['erro! Já curtiu esse post!'],400);
            }
            else{
                $user->likes()->attach($post_id);
                Post::where('id',$post_id)->increment('likes');
                return response()->json(['Post curtido!'],200);
            }

        }
        else{
            return response()->json(['erro! post não encontrado!'],400);
        }
    }

    public function dislikes($post_id){
        $user = Auth::user();
        $post = Post::find($post_id);
        if($post){

            if ($user->likes->contains($post)) {
                $user->likes()->detach($post_id);
                Post::where('id',$post_id)->decrement('likes');
                return response()->json(['Post descurtido!'],200);
            }
            else{
                return response()->json(['erro! você não curtiu essse post'],200);

            }
        }
        else{
            return response()->json(['erro! post não encontrado!'],200);
        }
    }

    public function follow($following_id){
        $user = Auth::user();
        $following = User::find($following_id);
        if($following){
            if ($following->usersFollowers->contains($user)) {
                return response()->json(['erro! Já está seguindo!'],400);
            }
            else{
                $user->usersFollowing()->attach($following_id);
                return response()->json(['Usuario seguido!'],200);
            }
        }
        else{
            return response()->json(['erro!'],400);
        }
    }

    public function unfollow($following_id){
        $user = Auth::user();
        $following = User::find($following_id);
        if($following){
            if ($following->usersFollowers->contains($user)) {
                $user->usersFollowing()->detach($following_id);
                return response()->json(['Deixou de seguir esse usuario'],200);
            }
            else{
                return response()->json(['erro! Você não segue esse usuario'],400);
            }
        }
        else{
            return response()->json(['erro!'],400);
        }
    }
        
    /**
     * checks if you follow a certain user
     * 
     * @param $following_id
     * 
     */

    public function followCheck($following_id){
        $user = Auth::user();
        $following = User::find($following_id);

        if($following){
            if ($following->usersFollowers->contains($user)) {
                return 1;
            }
            else{
                return 0;
            }
        }
        else{
            return response()->json(['erro!'],400);
        }
    }
       
    /**
     * Display a listing of following users
     * 
     * @param $id
     * 
     */
    public function listFollowing($id){
        $user = User::findOrFail($id);
        $list_following = $user->usersFollowing;

        for ($i=0; $i < count($list_following) ; $i++) { 
            for ($j=0; $j < $i  ; $j++) { 
                if ($list_following[$j] == $list_following[$i]) {
                    unset($list_following[$j]);
                }
            }
        }
        return response()->json(['list_following' => $list_following],200);
    }

    /**
     * Display a listing of followers users
     * 
     * @param $id
     * 
     */
    public function listFollowers($id){
        $user = User::findOrFail($id);
        $list_followers = $user->usersFollowers;

        for ($i=0; $i < count($list_followers) ; $i++) { 
            for ($j=0; $j < $i  ; $j++) { 
                if ($list_followers[$j] == $list_followers[$i]) {
                    unset($list_followers[$j]);
                }
            }
        }

        return response()->json(['list_followers' => $list_followers],200);
    }

    /**
     * Display a listing of following users posts
     * 
     * 
     * 
     */

    public function listFollowingPosts(){
        $i = 0;
        $user = Auth::user();
        $list_following_posts = [];
        $list_following = $user->usersFollowing;

        foreach ($list_following as $user){
            $list_following_posts[$i] = $user->posts;
            $i += 1;
        }
        return response()->json(['list_following_posts' => $list_following_posts],200);
    }

    /**
     * Display a listing of users but the logged one
     * 
     * 
     * 
     */

    public function otherUsers(){
        $user = Auth::user();
        return response()->json(['other_users' => User::where('id','!=',$user->id)->get()],200);
    }
}
