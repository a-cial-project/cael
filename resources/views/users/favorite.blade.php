<head>
	<link rel="stylesheet" href="{{ asset('css/Sports/show.css') }}">
	<link rel="stylesheet" href="{{ asset('css/Sports/index.css') }}">
</head>

@extends('layouts.app')

@section('content')
<div class="container">
  @foreach($items as $item)
    @if($genre == 'memos')
    <!-- メモのレイアウト -->
    <a href="{{ route('memo.show', ['memo' => $item->id]) }}">
      <div class="row item">
        <div class="item_block">
          <h2>{{ $item->name }}</h2>
        </div>
        <div class="offset-3 item_user">
          <h4>投稿者：{{ $item->user->name }}</h4>
          <h4>カテゴリー：{{ $item->memo_category->name }}</h4>
        </div>
      </div>
    </a>

    @elseif($genre == 'engineers')
    <!-- エンジニアのレイアウト -->
    <a href="{{ route('engineer.show', ['engineer' => $item->id]) }}">
      <div class="row item">
        <div class="item_block">
          <h2>{{ $item->name }}</h2>
        </div>
        <div class="offset-3 item_user">
          <h4>投稿者：{{ $item->user->name }}</h4>
          <h4>カテゴリー：{{ $item->engineer_category->name }}</h4>
        </div>
      </div>
    </a>

    @elseif($genre == 'sports')
    <!-- スポーツのレイアウト -->
    <a href="{{ route('sport.show', ['sport' => $item->id]) }}">
      <div class="row item">
        <div class="item_block">
          <h2>{{ $item->name }}</h2>
        </div>
        <div class="offset-3 item_user">
          <h4>投稿者：{{ $item->user->name }}</h4>
          <h4>カテゴリー：{{ $item->sport_category->name }}</h4>
        </div>
      </div>
    </a>
    @endif
  @endforeach
</div>
@endsection