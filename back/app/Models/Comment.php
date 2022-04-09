<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


use Auth;

class Comment extends Model
{
    public function createComment(Request $request){
        $user = Auth::user();
        $this->user_id = $user->id;
        
        $this->text = $request->text;

        $this->post_id = $request->post_id;
        

        $this->save();
    }

    public function updateComment(Request $request){
        if($request->text){
            $this->text = $request->text;
        }
        $this->save();
    }

    public function post(){
        return $this->belongsTo('App\Models\Post');
    }
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    use HasFactory;
}
