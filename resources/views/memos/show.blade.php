<head>
  <link rel="stylesheet" href="{{ asset('css/Memos/create.css') }}">
  <link rel="stylesheet" href="{{ asset('css/prettify.css') }}">
  <link rel="stylesheet" href="{{ asset('css/favorite.css') }}">
</head>
@extends('layouts.app')

@section('content')

<div class="container">
  @if(Auth::id() == $memo->user_id)
    <a href="{{ route('memo.edit', ['memo' => $memo->id]) }}" class="btn btn-primary col-2">編集する</a>
  @endif
  <h2 class="row" style="text-align: center;">{{ $memo->name }}</h2>

  <div class="favorite" name="memo_id" data-id='{{ $memo->id }}' data-url='/memostock'>
    @if(!is_null($result))
      <i class="fas fa-pencil-alt like"></i>
      <p>{{ $count }}</p>
    @else
      <i class="fas fa-pencil-alt unlike"></i>
      <p>{{ $count }}</p>
    @endif
  </div>

  @foreach($memo->sections as $section)
    <div class="row"><h3>{{ $section->title }}</h3></div>

    @foreach($section->section_contents->sortBy('order') as $content)
      <div class="">
        @if(isset($content->code))
          <pre class="prettyprint linenums">
{!! \App\Model\Memos\Memo::escape(e($content->code)) !!}
          </pre>
        @elseif(isset($content->content))
          <p>{!! $content->content !!}</p>
        @endif
      </div>
    @endforeach
  @endforeach
</div>
<script type="module" src="{{ mix('js/prettify.js') }}"></script>
<script type="module" src="{{ mix('js/showFavorite.js') }}"></script>
@endsection