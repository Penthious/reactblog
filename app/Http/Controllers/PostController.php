<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index( Request $request )
    {
        if ( $request->wantsJson() ) {
            $post = Post::all();

            return response()->json($post, 200);
        }

        return view('welcome');
    }

    public function store( Request $request )
    {
        if ( $request->wantsJson() ) {
            Post::create($request->all());

            return response()->json('Created', 200);
        }

        return view('welcome');
    }

    public function show( $id, Request $request )
    {
        if ( $request->wantsJson() ) {
            $post = Post::find($id);

            return response()->json($post, 200);
        }

        return view('welcome');
    }

    public function edit( $id, Request $request )
    {
        if ( $request->wantsJson() ) {
            $post = Post::find($id);

            return response()->json($post, 200);
        }

        return view('welcome');
    }

    public function update( $id, Request $request )
    {
        if ( $request->wantsJson() ) {
            $post = Post::find($id);
            $post->update($request->all());

            return response()->json('Updated', 200);
        }

        return view('welcome');
    }

    public function destroy( $id, Request $request )
    {
        if ( $request->wantsJson() ) {
            $post = Post::find($id);
            $post->delete();

            return response()->json('Deleted', 200);
        }

        return view('welcome');
    }
}
