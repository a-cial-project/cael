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
</div>
@endsection