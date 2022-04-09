<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Http\Request;


class User extends Authenticatable
{
    use HasApiTokens;

    public function createUser(Request $request){
        $this->is_admin = $request->is_admin;
        $this->name = $request->name;
        $this->email = $request->email;
        $this->password = bcrypt($request->password);
        $this->category = $request->category;
        $this->bio = $request->bio;
        $this->save();
    }
    public function updateUser(Request $request){
        if($request->is_admin){
            $this->is_admin = $request->is_admin;
        }
        if($request->name){
            $this->name = $request->name;
        }
        if($request->email){
            $this->email = $request->email;
        }
        if($request->password){
            $this->password = bcrypt($request->password);
        }
        if($request->category){
            $this->category = $request->category;
        }
        if($request->bio){
            $this->bio = $request->bio;
        }

        $this->save();
    }

    
    public function usersFollowing(){
        return $this->belongsToMany('App\Models\User','usersfollowing',
                                    'follower_id','following_id');
    }

    public function usersFollowers(){
        return $this->belongsToMany('App\Models\User','usersfollowing',
                                    'following_id','follower_id');
    }
    
    public function posts(){
        return $this->hasMany('App\Models\Post');
    }

    public function comment(){
        return $this->hasMany('App\Models\Comment');
    }

    public function likes(){
        return $this->belongsToMany('App\Models\Post','likes');
    }

    use HasFactory;
}
