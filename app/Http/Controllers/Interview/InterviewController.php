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

    // 管理者ページ
    public function post() {
        return view('interviews.post');
    }
    public function show_posts() {
        return view('interviews.show_posts');
    }
    public function check_post() {
        return view('interviews.check_posts');
    }
    public function update_post() {
        return view('interviews.update_post');
    }
    public function destroy_post() {
        return view('interviews.destroy_post');
    }
}
