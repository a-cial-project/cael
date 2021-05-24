<head>
  <link rel="stylesheet" href="{{ asset('css/Memos/create.css') }}">
  <link rel="stylesheet" href="{{ asset('css/prettify.css') }}">
</head>
@extends('layouts.app')

@section('content')

  <div class="container">
  	<h3 style="text-align: center;" class="mb-5">投稿してたくさんの仲間を呼ぼう！</h3>
    <form action="{{ route('memo.store')}}" method="post" name="my_form">
      <div class="input">
      @csrf
        <!-- memo部分 -->
        <input type="text" name="memo_name" class="row offset-4 col-4 mb-5">
        <select class="row offset-4 col-4 mb-5" id="category_id" name="category_id">
        	<option selected value="0">ここには無い</option>
    	    @foreach($categories as $category)
    	      <option value="{{ $category->id }}">{{ $category->name }}</option>
    	    @endforeach
        </select>
        <input type="text" name="new_category" id="category" placeholder="新しいカテゴリーを追加" class="row offset-4 col-4 mb-5">
        <select class="row offset-4 col-4 mb-5" name="status">
          <option selected value="privacy">非公開</option>
          <option value="relase">公開</option>
        </select>

        <!-- section部分 -->
        <div class="section_create_form">
        </div>

        <div class="fix hidden my-5 col-9 offset-2">
          <button type="button" id="code" class="btn btn-primary col-3">コードを追加</button>
          <button type="button" id="content" class="btn btn-primary col-3">ブログを追加</button>
          <button type="button" id="image" class="btn btn-primary col-3">画像を追加</button>
        </div>
      </div>

      <div class="posting">
        <button type="button" id="confirmBtn" class="btn btn-primary row offset-5 col-2">確認画面へ</button>
      </div>
      <div class="submitarea hidden">
        <button type="submit" id="submitBtn" class="btn btn-primary row offset-5 col-2">投稿する</button>
      </div>
    </form>

    <div class="add_btn">
      <button type="button" id="sectionBtn" class="btn btn-primary col-2">セクションを追加</button>
    </div>
  </div>

  <div class="container confirm hidden">
    <button type="button" id="returnBtn" class="btn btn-primary col-2">戻る</button>
  </div>

<script type="module" src="{{ mix('js/prettify.js') }}"></script>
<script type="module" src="{{ mix('js/sectionAdd.js') }}"></script>
<script type="module" src="{{ mix('js/category.js') }}"></script>
@endsection
