<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function form()
    {
        return Inertia::render('Contact/form');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param SendRequest $request
     * @return \Illuminate\Http\Response
     */
    public function send(SendRequest $request)
    {
        dd(new Contact($request->toArray()));
    }
}
