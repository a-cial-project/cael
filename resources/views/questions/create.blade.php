<head>
  <link rel="stylesheet" href="{{ asset('css/Questions/question_editor.css')}}">
</head>
@extends('layouts.app')

<!-- yeildに挿入 -->
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
<!-- 画像保存・プレビュー -->
  <div class="row col-12 m-3">
    <form id="input_file">
      <strong>[該当ソースコード・エラーコード画像]:</strong>
      <input type="file" accept="image/*" name="upload_img" class="ml-4" id="file_upload" multiple="multiple">
    </form>
  </div>
    <!-- 画像表示用要素　ここに保存した画像をimg要素で出力 -->
  <div class="img_view" id="img_views">
  </div>

  <!-- 質問投稿 -->
  <div class="row mx-2">
    <div class="col-6">
      <form action="{{ route('question.store') }}" method="post" enctype="multipart/form-data" id="question_post" name="question">
        @csrf
       <textarea id="editor" name="ckeditor" ></textarea>
    </div>
    <div class="col-6 border" style="overflow: scroll;">
      <p class="font-weight-bold text-center my-3 border-bottom">プレビュー</p>
      <p class="preview" id="preview">
      </p>
    </div>
  </div>
  <input class="btn btn-primary offset-3 col-6 mt-3" type="submit" name="question_submit" value="質問確認画面へ">
  </form>
    <!-- module->ページの最後に読み込む -->
<script type="module" src="{{ mix('js/question_editor.js') }}"></script>

@endsection

