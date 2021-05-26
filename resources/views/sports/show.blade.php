<head>
	<link rel="stylesheet" href="{{ asset('css/favorite.css') }}">
</head>

@extends('layouts.app')

@section('content')
<div class="container">
  @if(Auth::id() == $sport->user_id)
    <a href="{{ route('sport.edit', ['sport' => $sport->id]) }}" class="row offset-4 col-4 mb-3 btn btn-primary">編集する</a>
  @endif
  <h3 class="my-5">{{ $sport->name }}</h3>
  <!-- data属性にsport_idを持たせてjsに送る -->
  <div class="favorite" name="sport_id" data-id='{{ $sport->id }}' data-url='/sportfavorite'>
  	<!-- モデルから自分がいいねしているsportかを判定 -->
  	@if(!is_null($result))
	    <i class="fas fa-running like"></i>
	    <p>{{ $count }}</p>
	  @else
	    <i class="fas fa-running unlike"></i>
	    <p>{{ $count }}</p>
	  @endif
  </div>

  <!-- sportcommentを押すとcontentと一緒に隠しIDもjsに送られる -->
  <input type="hidden" name="user_id" id="user_id" value="{{ Auth::user()->id }}">
  <input type="hidden" name="sport_id" id="type_value" value="{{$sport->id}}">
  <textarea name="content" id="content" style="width:50%"></textarea>
  <button type="button" id="submit" data-url="/sportcomment">送信</button>

  <!-- viewcommentを取得してコメントを追加する部分を指定している -->
	<div class="viewcomment">
	  @foreach($sportcomments as $sportcomment)
	  <!-- この中にコメントが追加されていく -->
	    <div class="section">
		    <div class="user">{{ $sportcomment->user->name }}</div>
		    <div class="comment">{{ $sportcomment->comment }}</div>
	    </div>
	  @endforeach
	</div>
</div>
  <script type="module" src="{{ mix('js/comment.js') }}"></script>
  <script type="module" src="{{ mix('js/showFavorite.js') }}"></script>
@endsection