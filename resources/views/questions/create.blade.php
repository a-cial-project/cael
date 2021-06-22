<head>
  <script src="/ckeditor/ckeditor.js" type="text/javascript"></script>
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
<div class="container">
  <div class="row">
    <div class="col-12">
      <form action="{{ route('question.store') }}" method="post" accept-charset="utf-8">
        @csrf
        <input type="text" name="title" placeholder="タイトルを入力" class="col-12 form-control">
        <input type="body" name="content" placeholder="試した方法・ソースコード">
        <!-- 画像アップロード -->
        <input type="bocy" name="image" placeholder="画像アップロード">
        <input class="btn btn-primary" type="submit" name="question_submit" value="質問確認画面へ">
      </form>
    </div>
  </div>
  <textarea class="ckeditor" name="" id="editor"></textarea>
</div>

@endsection
