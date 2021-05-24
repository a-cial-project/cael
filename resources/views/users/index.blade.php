<head>
  <link rel="stylesheet" href="{{ asset('css/Users/index.css') }}">
</head>
@extends('layouts.app')

@section('content')
<div class="container">
  <div class="search-wrapper">
    <div class="user-search-form row">
      {{ Form::text('search_name', null, ['id' => 'search_name', 'class' => 'form-control shadow', 'placeholder' => 'ユーザーを検索する']) }}
      {{ Form::button('<i class="fa fa-search row" aria-hidden="true"></i>', ['class' => 'btn search-icon', 'type' => 'button']) }}
    </div>
  </div>
  <div class="user_all">
  	@if(isset($users))
  	  <div class="row mx-3 mb-5 alreadyUser">
  	  	@foreach($users as $user)
	  	  	<div class="user mr-4 mb-4">
            <a href="{{ route('user.show', ['user' => $user->id]) }}">{{ $user->name }}</a>
	  	  	</div>
	  	  @endforeach
        <div class="row mx-3 mb-5">{{ $users->links() }}</div>
  	  </div>
    @endif
  </div>
</div>
<script type="module" src="{{ mix('js/pagination.js') }}"></script>
<script type="module" src="{{ mix('js/usersearch.js') }}"></script>
@endsection
