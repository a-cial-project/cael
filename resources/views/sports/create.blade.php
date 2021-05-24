@extends('layouts.app')

@section('content')

@if ($errors->any())
  <div class="alert alert-danger">
  <ul>
      @foreach ($errors->all() as $error)
          <li>{{ $error }}</li>
      @endforeach
  </ul>
  </div>
@endif

<div class="container">
	<h3 style="text-align: center;" class="mb-5">投稿してたくさんの仲間を呼ぼう！</h3>
  <form action="{{ route('sport.store')}}" method="post">
    @csrf
    <input type="text" name="name" class="row offset-4 col-4 mb-5">
    <select class="row offset-4 col-4 mb-5" id="category_id" name="category_id">
    	<option selected value="0">ここには無い</option>
	    @foreach($categories as $category)
	      <option value="{{ $category->id }}">{{ $category->name }}</option>
	    @endforeach
    </select>
    <input type="text" name="new_category" id="category" placeholder="新しいカテゴリーを追加" class="row offset-4 col-4 mb-5">
    <textarea name="content" rows="10" cols="80" class="row offset-2 col-8 mb-5"></textarea>
    <input type="date" name="date" class="today row offset-4 col-4 mb-5">
    <input type="date" name="limit" class="today row offset-4 col-4 mb-5">
    <button type="submit" class="btn btn-primary row offset-2 col-8">投稿する</button>
  </form>
</div>

<script type="module" src="{{ mix('js/category.js') }}"></script>
@endsection
