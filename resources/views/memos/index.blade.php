<head>
  <link rel="stylesheet" href="{{ asset('css/Memos/create.css') }}">
</head>
@extends('layouts.app')

@section('content')

<div class="container">
  @foreach($memos as $memo)
    <a href="{{ route('memo.show', ['memo' => $memo->id]) }}">
      <div class="row memo">
        <div class="memo_block">
          <h2>{{ $memo->name }}</h2>
        </div>
        <div class="offset-3 memo_user">
          <h4>投稿者：{{ $memo->user->name }}</h4>
          <h4>カテゴリー：{{ $memo->memo_category->name }}</h4>
        </div>
      </div>
    </a>
  @endforeach
</div>

@endsection