<head>
  <link rel="stylesheet" href="{{ asset('css/Memos/create.css') }}">
  <link rel="stylesheet" href="{{ asset('css/Memos/show.css') }}">
  <link rel="stylesheet" href="{{ asset('css/prettify.css') }}">
  <link rel="stylesheet" href="{{ asset('css/favorite.css') }}">
</head>
@extends('layouts.app')

@section('content')

<div class="container">
  @if(Auth::id() == $memo->user_id)
    <a href="{{ route('memo.edit', ['memo' => $memo->id]) }}" class="btn btn-primary col-2">編集する</a>
  @endif
  <h2 class="row offset-1 memo_title">{{ $memo->name }}</h2>

  <div class="favorite" name="memo_id" data-id='{{ $memo->id }}' data-url='/memostock'>
    @if(!is_null($result))
      <i class="fas fa-pencil-alt like"></i>
      <p>{{ $count }}</p>
    @else
      <i class="fas fa-pencil-alt unlike"></i>
      <p>{{ $count }}</p>
    @endif
  </div>

    <div class="row"><h3>{{ $memo->title }}</h3></div>

      <div class="">
          {!! $memo->content !!}
      </div>
</div>
<script type="module" src="{{ mix('js/prettify.js') }}"></script>
<script type="module" src="{{ mix('js/showFavorite.js') }}"></script>
@endsection