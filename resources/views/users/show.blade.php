<head>
	<link rel="stylesheet" href="{{ asset('css/Sports/show.css') }}">
	<link rel="stylesheet" href="{{ asset('css/Sports/index.css') }}">
</head>

@extends('layouts.app')

@section('content')
<div class="container">
  @if(Auth::user()->role == 0)
    <a href="{{ route('user.edit', ['user' => $user->id]) }}">編集</a>
  @endif

  @if(Auth::user()->id != $user->id)
    <form action="{{ route('room.create')}}" method="get">
      <input type="hidden" name="user" value="{{ $user->id }}">
      <button type="submit" class="btn btn-primary row offset-2 col-8">チャットする</button>
    </form>
  @endif

  <h3>{{ $user->name }}さんのお気に入り</h3>
  <h4>メモ：<a href="{{ route('users.genre', ['user' => $user->id, 'genre' => 'memos']) }}">{{$memo}}</a></h4>
  <h4>エンジニア募集：<a href="{{ route('users.genre', ['user' => $user->id, 'genre' => 'engineers']) }}">{{$engineer}}</a></h4>
  <h4>スポーツ仲間募集：<a href="{{ route('users.genre', ['user' => $user->id, 'genre' => 'sports']) }}">{{$sport}}</a></h4>
</div>
@endsection