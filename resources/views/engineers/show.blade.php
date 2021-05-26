<head>
	<link rel="stylesheet" href="{{ asset('css/favorite.css') }}">
</head>

@extends('layouts.app')
@section('content')
<div class="container">
  @if(Auth::id() == $engineer->user_id)
    <a href="{{ route('engineer.edit', ['engineer' => $engineer->id]) }}" class="row offset-4 col-4 mb-3 btn btn-primary">編集する</a>
  @endif
  <h3 class="my-5">{{ $engineer->name }}</h3>
  <div class="favorite" name="engineer_id" data-id='{{ $engineer->id }}' data-url='/engineerfavorite'>
  	@if(!is_null($result))
	    <i class="fas fa-laptop-code like"></i>
	    <p>{{ $count }}</p>
	  @else
	    <i class="fas fa-laptop-code unlike"></i>
	    <p>{{ $count }}</p>
	  @endif
  </div>


  <input type="hidden" name="user_id" id="user_id" value="{{ Auth::user()->id }}">
  <input type="hidden" name="engineer_id" id="type_value" value="{{$engineer->id}}">
  <textarea name="content" id="content" style="width:50%"></textarea>
  <button type="button" id="submit" data-url="/engineercomment">送信</button>

	<div class="viewcomment">
	  @foreach($engineercomments as $engineercomments)
	    <div class="section">
		    <div class="user">{{ $engineercomments->user->name }}</div>
		    <div class="comment">{{ $engineercomments->comment }}</div>
	    </div>
	  @endforeach
	</div>
</div>
  <script type="module" src="{{ mix('js/comment.js') }}"></script>
  <script type="module" src="{{ mix('js/showFavorite.js') }}"></script>
@endsection