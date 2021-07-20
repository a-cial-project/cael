<?php

namespace App\Http\Controllers\Interview;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InterviewController extends Controller
{
    //
    public function index() {
        return view('interviews.interview');
    }

    public function show() {
        return view('interviews.show');
    }
}
