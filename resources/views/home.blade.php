<head>
  <link rel="stylesheet" href="{{ asset('css/Users/index.css') }}">
  <link rel="stylesheet" href="{{ asset('css/favorite.css') }}">
</head>
@extends('layouts.app')

@section('content')
<div class="container">
  <h1 class="row" style="text-align: center;">アーシャルデザインへようこそ！</h1>

  <div class="search">
  	{{Form::open(['url' => 'usersearch', 'id' => 'route', 'method' => 'post'])}}
  	{{Form::token()}}
  	{{ Form::text('text', null,['class' => 'form-control shadow', 'id' => 'search_value', 'placeholder' => '検索する']) }}
  	{{Form::select('params', ['usersearch' => '社員', 'sportsearch' => 'スポーツ', 'engineersearch' => 'エンジニア', 'memosearch' => '備忘録'], '', ['class' => 'form-control my-3', 'id' => 'params'])}}
    {{ Form::button('検索する', ['class' => 'offset-4 col-4 btn btn-primary mb-3', 'type' => 'button', 'id' => 'search-icon']) }}
    {{Form::close()}}
  </div>

  <div id="search_all">
  </div>

  <a href="{{ route('sport.create') }}" class="row offset-4 col-4 mb-3 btn btn-primary">スポーツ仲間を探す</a>
  <a href="{{ route('engineer.create') }}" class="row offset-4 col-4 mb-3 btn btn-primary">開発仲間を探す</a>
  <a href="{{ route('memo.create') }}" class="row offset-4 col-4 btn mb-3 btn-primary">備忘録を追加</a>
  <a href="{{ route('question.index') }}" class="row offset-4 col-4 mb-3 btn btn-primary">質問をする</a>
  @if(Auth::user()->role == 0)
    <a href="{{ route('user.create') }}" class="row offset-4 col-4 mb-3 btn btn-primary">社員を追加</a>
  @endif

</div>

<script type="module">
	const route = document.getElementById('route');
	let params = document.getElementById('params');
	params.onchange = function(){
		route.setAttribute('action', location.href + params.value);
	};
</script>
<script type="module" src="{{ mix('js/pagination.js') }}"></script>
<script type="module" src="{{ mix('js/search.js') }}"></script>
<script type="module" src="{{ mix('js/favorite.js') }}"></script>
@endsection