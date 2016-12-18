<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
    }

    public function sendMail( Request $request )
    {
        Mail::send('emails.contact', ['message' => $request->message], function ( $m ) use ( $request ) {
            $m->from($request->email)
                ->subject($request->reason)
                ->to('tleffew1994@gmail.com');
        });
    }
}
