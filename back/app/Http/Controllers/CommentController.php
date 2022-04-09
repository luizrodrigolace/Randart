<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\CommentResource;



class CommentController extends Controller
{
    public function create(CommentRequest $request){
        $comment = new Comment;
        $comment->createComment($request);
        return response()->json(new CommentResource($comment));
    }
    public function index(){
        $comments = Comment::all();
        return response()->json(['comment' => $comments],200);
    }

    public function show($id){
        $comment = Comment::findOrFail($id);
        return response()->json(['comment' => $comment],200);
    }

    public function update(Request $request, $id){
        $comment = Comment::find($id);
        $comment->updateComment($request);
        $comment->save();
        return response()->json(['comment' => $comment],200);
    }

    public function destroy($id){
        $comment = Comment::find($id);
        $comment->delete();
        return response()->json(['Comentario deletado com sucesso!'],200);
    }
}
