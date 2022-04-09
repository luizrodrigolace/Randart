<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;


class PostController extends Controller
{
    public function create(PostRequest $request){
        $post = new Post;
        $post->createPost($request);
        return response()->json(new PostResource($post));
    }
    public function index(){
        $post = Post::with('user')->orderBy('id', 'desc')->get();
        $post->load('user'); 
        return response()->json(['post' => $post],200);
        
    }

    public function show($id){
        $post = Post::findOrFail($id);

        $list_names = [];
        array_push($list_names,$post->user->name);

        return response()->json(['post' => $post],200);
    }

    public function update(PostRequest $request, $id){
        $post = Post::find($id);
        $post->updatePost($request);
        return response()->json(['post' => $post],200);
    }

    public function destroy($id){
        $post = Post::find($id);
        $post->delete();
        return response()->json(['Post deletado com sucesso!'],200);
    }


    /**
     * Display a listing of comments by post
     * 
     * @param $id
     * 
     */
    public function listComment($id){
        $post = Post::findOrFail($id);
        $list_comment = $post->comment;

        $list_names = [];
        foreach ($list_comment as $comment) {
            array_push($list_names,$comment->user->name);
        }

        return response()->json(['list_comment' => $list_comment],200);
    }

    /**
     * Display a listing of user posts by user id
     * 
     * @param $id
     * 
     */
    
    public function listUserPosts($id){
        $user = User::findOrFail($id);
        $list_posts = $user->posts;
        return response()->json(['list_posts' => $list_posts],200);
    }
}
