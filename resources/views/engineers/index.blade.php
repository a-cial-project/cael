<head>
  <link rel="stylesheet" href="{{ asset('css/Engineers/index.css') }}">
</head>
@extends('layouts.app')

@section('content')
<div class="container">

  <div class="search">
  	<div class="row"><a href="{{ route('engineer.create') }}" class="offset-4 col-4 btn btn-primary mb-3">エンジニア仲間を探す</a></div>
  	{{Form::open(['url' => 'engineersearch', 'method' => 'post'])}}
  	{{Form::token()}}
  	{{ Form::text('text', null,['name' => '', 'class' => 'form-control shadow', 'placeholder' => '検索する']) }}
    {{ Form::button('<i class="fa fa-search row" aria-hidden="true"></i>', ['class' => 'btn search-icon', 'type' => 'submit']) }}
    {{Form::close()}}
  </div>

  @if(isset($engineers))
			@foreach($engineers as $key => $engineer)

		    @if(App\Model\Engineers\EngineerFavorite::favoritecheck($engineer->id))
		      <div class="row offset-3 col-6 mb-5">
		        <a href="{{ route('engineer.show', ['engineer' => $engineer->id]) }}" class="col-5 btn btn-primary">{{ $engineer->name }}</a>
			      <div  class="favorite" name="engineer_id" data-engineer='{{ $engineer->id }}' data-order='{{ $key }}'>
				      <i class="fas fa-laptop-code like"></i>
				      <p>{{ App\Model\Engineers\EngineerFavorite::favoritecount($engineer->id) }}</p>
				    </div>
			    </div>
			  @else
			    <div class="row offset-3 col-6 mb-5">
				    <a href="{{ route('engineer.show', ['engineer' => $engineer->id]) }}" class="col-5 btn btn-primary">{{ $engineer->name }}</a>
				    <div class="favorite" name="engineer_id" data-engineer='{{ $engineer->id }}' data-order='{{ $key }}'>
				      <i class="fas fa-laptop-code unlike"></i>
				      <p>{{ App\Model\Engineers\EngineerFavorite::favoritecount($engineer->id) }}</p>
				    </div>
			    </div>
			  @endif
			@endforeach
    {{ $engineers->links() }}
  @endif
</div>
<script type="module" src="{{ mix('js/engineerFavorite.js') }}"></script>
@endsection
