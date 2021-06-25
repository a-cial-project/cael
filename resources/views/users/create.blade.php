@extends('layouts.app')

@section('content')

@if ($errors->any())
  <div class="alert alert-danger">
  <ul>
      @foreach ($errors->all() as $error)
          <li>{{ $error }}</li>
      @endforeach
  </ul>
  </div>
@endif

<div class="container">
	<h3 style="text-align: center;" class="mb-5">社員を増やす</h3>
  <form action="{{ route('user.store')}}" method="post">
    @csrf
    <input type="text" name="name" placeholder="名前" class="row offset-4 col-4 mb-5">
    <input type="email" name="email" placeholder="メールアドレス" class="row offset-4 col-4 mb-5">
    <input type="date" name="birth" id="birth" class="row offset-4 col-4 mb-5">
    <input type="date" name="join" id="join" class="row offset-4 col-4 mb-5">
    <input type="text" name="nickname" placeholder="ニックネーム" class="row offset-4 col-4 mb-5">
    <textarea name="profile" placeholder="プロフィール" cols="30" rows="10" class="row offset-4 col-4 mb-5"></textarea>
    <input type="text" name="sport" placeholder="好きなスポーツ" class="row offset-4 col-4 mb-5">
    <select name="role" id="" class="row offset-4 col-4 mb-5">
      <option value="0">管理者</option>
      <option value="1">エンジニア</option>
      <option value="2">カリキュラム生</option>
      <option value="3" selected>内定者</option>
    </select>
    <input type="password" name="password" placeholder="仮パスワード" class="row offset-4 col-4 mb-5">
    <button type="submit" class="btn btn-primary row offset-2 col-8">投稿する</button>
  </form>
</div>

@endsection
