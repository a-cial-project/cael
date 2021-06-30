
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
        <!-- cdeditorの生成　class命名による -->
       <textarea id="editor" name="ckeditor"></textarea>
        <input class="btn btn-primary" type="submit" name="question_submit" value="質問確認画面へ">
      </form>
      <!-- scriptがページを読み込む前に発動するため、一定時間を置いて起動させる -->
      <script>
        setTimeout(function(){
           CKEDITOR.replace("editor", {
            uiColor: "#EEEEEE",
            width:700,
            height:600,
          });
        },);
      </script>
    </div>
  </div>
</div>

@endsection

