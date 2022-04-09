<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;
use App\Models\Post;

class PostOwnerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {   
        $user = Auth::user();
        if(Post::find($request->id)->user_id == $user->id){
            return $next($request);
        }
        else{
            return response()->json(['error' =>"Usuario sem permissão"],401);
        }
    }
}
