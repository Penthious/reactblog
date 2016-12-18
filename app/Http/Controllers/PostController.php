<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index( Request $request )
    {
            $post = Post::all();

            return response()->json($post, 200);
    }

    public function store( Request $request )
    {
        Post::create($request->all());

        return response()->json('Created', 200);
    }

    public function show( $id )
    {
        $post = Post::find($id);

        return response()->json($post, 200);
    }

    public function edit( $id )
    {
        $post = Post::find($id);

        return response()->json($post, 200);
    }

    public function update( $id, Request $request )
    {
        $post = Post::find($id);
        $post->update($request->all());

        return response()->json('Updated', 200);
    }

    public function destroy( $id )
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json('Deleted', 200);
    }
}
