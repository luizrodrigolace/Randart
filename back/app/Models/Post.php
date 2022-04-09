<?php

namespace App\Models;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Post extends Model
{
    public function createPost(Request $request){
        $user = Auth::user();
        $this->user_id = $user->id;
        $this->text = $request->text;
        $this->category = $request->category;
        $this->media = $request->media;
        $this->likes = $request->likes;

        $this->save();
    }

    public function updatePost(Request $request){
        if($request->text){
            $this->text = $request->text;
        }
        if($request->media){
            $this->medida = $request->media;
        }
        if($request->likes){
            $this->likes = $request->likes;
        }
        if($request->category){
            $this->category = $request->category;
        }

        $this->save();
    }

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function comment(){
        return $this->hasMany('App\Models\Comment');
    }

    public function likes(){
        return $this->hasMany('App\Models\User');
    }

    use HasFactory;
}
