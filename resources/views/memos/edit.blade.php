<head>
  <link rel="stylesheet" href="{{ asset('css/Memos/create.css') }}">
  <link rel="stylesheet" href="{{ asset('css/Memos/show.css') }}">
  <link rel="stylesheet" href="{{ asset('css/prettify.css') }}">
</head>
@extends('layouts.app')

@section('content')

    <h3 style="text-align: center;" class="mb-5">投稿して知識を共有しよう！</h3>
    <form action="{{ route('memo.update', ['memo' => $memo->id])}}" enctype="multipart/form-data" method="post" name="my_form">
      <div class="input">
      @method('put')
      @csrf
        <!-- memo部分 -->
        <input type="hidden" name="id" class="row offset-4 col-4 mb-5" id="memo_id" value="{{$memo->id}}">
        <input type="text" name="memo_name" class="row offset-4 col-4 mb-5" id="memo_name" value="{{$memo->name}}">
        <p id="hide" style="display: none;">{{$memo->memo_category_id}}</p>
        <select class="row offset-4 col-4 mb-5" id="category_id" name="category_id">
          <option selected value="0">ここには無い</option>
          @foreach($categories as $category)
            <option value="{{ $category->id }}">{{ $category->name }}</option>
          @endforeach
        </select>
        <input type="text" name="new_category" id="new_category" placeholder="新しいカテゴリーを追加" class="row offset-4 col-4 mb-5">
        <p id="hide" style="display: none;">{{$memo->status}}</p>
        <select class="row offset-4 col-4 mb-5" name="status" id="status">
          <option selected value="privacy">非公開</option>
          <option value="relase">公開</option>
        </select>

        <!-- section部分 -->
        <div id="input_form"><label class="input-label"><p>画像を選択してください</p><input type="file" id="image_input"></label></div>
        <div id="image_zone">
          @foreach($memo->section_contents as $section_content)
            <div class="img_parent">
              <div class="deleteBtn">×</div>
              <img src="{{ $section_content->image }}" alt="" class="image">
            </div>
          @endforeach
        </div>
        <div class="section_create_form">
          <textarea id="ckeditor" name="editor">{{ $memo->content }}</textarea>
          <div class="col-xs-6" id="preview"><h5 style="text-align: center;">プレビュー</h5><div id="realtimepreview">{!! $memo->content!!}</div></div>
        </div>

      </div>

      <div id="posting">
        <button type="button" id="confirmBtn" class="btn btn-primary row offset-5 col-2">確認画面へ</button>
      </div>

      <!-- 確認画面 -->
      <div class="container hidden" id="confirm">
        <button type="button" id="returnBtn" class="btn btn-primary col-2">戻る</button>
        <button type="submit" id="submitBtn" class="btn btn-primary row offset-5 col-2">投稿する</button>
      </div>
    </form>





<script type="module" src="{{ mix('js/prettify.js') }}"></script>
<script type="module" src="{{ mix('js/sectionEdit.js') }}"></script>
<script type="module" src="{{ mix('js/category.js') }}"></script>
<script type="module" src="{{ mix('js/s3_upload.js') }}"></script>
@endsection
