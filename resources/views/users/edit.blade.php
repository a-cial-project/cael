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
  <form action="{{ route('user.update', ['user' => $user->id])}}" method="post">
    @method('put')
    @csrf
    <input type="hidden" name="userId" value="{{ $user->id }}">

    @if(Auth::user()->id == $user->id)

      <input type="text" name="name" placeholder="名前" class="row offset-4 col-4 mb-5" value="{{ $user->name }}">
      <input type="email" name="email" placeholder="メールアドレス" class="row offset-4 col-4 mb-5" value="{{ $user->email }}">
      <input type="text" name="nickname" placeholder="ニックネーム" class="row offset-4 col-4 mb-5" value="{{ $user->nickname }}">
      <textarea name="profile" placeholder="プロフィール" cols="30" rows="10" class="row offset-4 col-4 mb-5">{{ $user->profile }}</textarea>
      <input type="text" name="sport" placeholder="好きなスポーツ" class="row offset-4 col-4 mb-5" value="{{ $user->sport }}">
      @if(Auth::user()->role == 0)
        <p id="hide" style="display: none;">{{ $user->role }}</p>
        <select name="role" id="role" class="row offset-4 col-4 mb-5">
          <option value="0">管理者</option>
          <option value="1">エンジニア</option>
          <option value="5">カリキュラム生</option>
          <option value="10">内定者</option>
        </select>
      @endif

    @elseif(Auth::user()->id != $user->id && Auth::user()->role == 0)
      <h3>{{ $user->name }}の権限を変更</h3>
      <p id="hide" style="display: none;">{{ $user->role }}</p>
      <select name="role" id="role" class="row offset-4 col-4 mb-5">
        <option value="0">管理者</option>
        <option value="1">エンジニア</option>
        <option value="5">カリキュラム生</option>
        <option value="10">内定者</option>
      </select>

    @endif
      <button type="submit" class="btn btn-primary row offset-2 col-8">投稿する</button>
  </form>
</div>

<script type="module">
  const roleChange = document.getElementById('role').children;
  const value = document.getElementById('hide').textContent;
  for(let i = 0; i < roleChange.length; i++){
    if(roleChange[i].value == value){
      roleChange[i].selected = true;
    }
  };
</script>

@endsection
