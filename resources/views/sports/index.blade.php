<head>
  <link rel="stylesheet" href="{{ asset('css/Sports/index.css') }}">
</head>
@extends('layouts.app')

@section('content')
<div class="container">

  <div class="search">
  	<div class="row"><a href="{{ route('sport.create') }}" class="offset-4 col-4 btn btn-primary mb-3">スポーツ仲間を探す</a></div>
  	{{Form::open(['url' => 'sportsearch', 'method' => 'post'])}}
  	{{Form::token()}}
  	{{ Form::text('text', null,['name' => 'user', 'class' => 'form-control shadow', 'placeholder' => '検索する']) }}
    {{ Form::button('<i class="fa fa-search row" aria-hidden="true"></i>', ['class' => 'btn search-icon', 'type' => 'submit']) }}
    {{Form::close()}}
  </div>

    @if(isset($sports))
			@foreach($sports as $key => $sport)

		    @if(App\Model\Sports\SportFavorite::favoritecheck($sport->id))
		      <div class="row offset-3 col-6 mb-5">
		        <a href="{{ route('sport.show', ['sport' => $sport->id]) }}" class="col-5 btn btn-primary">{{ $sport->name }}</a>
			      <div  class="favorite" name="sport_id" data-sport='{{ $sport->id }}' data-order='{{ $key }}'>
				      <i class="fas fa-running like"></i>
				      <p>{{ App\Model\Sports\SportFavorite::favoritecount($sport->id) }}</p>
				    </div>
			    </div>
			  @else
			    <div class="row offset-3 col-6 mb-5">
				    <a href="{{ route('sport.show', ['sport' => $sport->id]) }}" class="col-5 btn btn-primary">{{ $sport->name }}</a>
				    <div class="favorite" name="sport_id" data-sport='{{ $sport->id }}' data-order='{{ $key }}'>
				      <i class="fas fa-running unlike"></i>
				      <p>{{ App\Model\Sports\SportFavorite::favoritecount($sport->id) }}</p>
				    </div>
			    </div>
			  @endif
			@endforeach
      {{ $sports->links() }}
    @endif
</div>
<script type="module" src="{{ mix('js/sportFavorite.js') }}"></script>
@endsection
