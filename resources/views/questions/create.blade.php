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
  <div class="row mx-2">
    <div class="col-6">
      <form action="{{ route('question.store') }}" method="post" accept-charset="utf-8">
        @csrf
        <!-- cdeditorの生成　class命名による -->
       <textarea id="editor" name="ckeditor" ></textarea>
    </div>
    <div class="col-6 border">
      <p class="font-weight-bold text-center my-3 border-bottom">プレビュー</p>
      <p class="preview" id="preview">
      </p>
    </div>
  </div>

  <input class="btn btn-primary offset-3 col-6 mt-3" type="submit" name="question_submit" value="質問確認画面へ">
    </form>
<script type="module" src="{{ mix('js/question_editor.js') }}"></script>
@endsection

