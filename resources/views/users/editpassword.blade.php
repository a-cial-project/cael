<head>
</head>

@extends('layouts.app')

@section('content')
<div class="container">
  <h4>パスワード変更</h4>
  <form action="{{ route('users.updatepassword')}}" method="post">
  	@csrf
  	@if(isset($error_now))
  	  <p style="text-align: center; color: red;">{{ $error_now }}</p>
  	@endif
    <input type="password" name="now" placeholder="現在のパスワード" class="row offset-4 col-4 mb-5">

  	@if(isset($error_new))
  	  <p style="text-align: center; color: red;">{{ $error_new }}</p>
  	@endif
    <input type="password" name="new" placeholder="新しいパスワード" class="row offset-4 col-4 mb-5">

    <input type="password" name="confirm" placeholder="新しいパスワード" class="row offset-4 col-4 mb-5">
    <button type="submit" class="btn btn-primary row offset-2 col-8">パスワードを変更する</button>
  </form>
</div>
@endsection