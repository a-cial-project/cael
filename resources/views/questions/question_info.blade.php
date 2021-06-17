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
    <div class="col-12 text-center">
     <h3>質問する際の注意事項</h3>
     <h5>下記の項目を踏まえた上で質問してください</h5>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <img src="" alt="">
    </div>
    <div class="col-10">
      <strong>自分で調べてみましょう</strong>
      <p>
        分からないことに対して、まずは15分を目安に自分で調べてみましょう.<br>
        自分で考えることが理解する上で大切になります。
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-2">
      <img src="" alt="">
    </div>
    <div class="col-10">
      <strong>質問内容は明確にしましょう</strong>
      <p>
        WHAT（何を実現したいのか）HOW（試した方法）WHY（原因）の3つは明確にしましょう<br>
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-2">
      <img src="img/question/no_image.jpg" alt=""> 
    </div>
    <div class="col-10">
      <strong>質問内容は削除できません。</strong>
      <p>
        同じ悩みを抱えている人のために質問内容は削除できません。<br>
        よく確認した上で質問してください。<br>
        ※どうしても削除したい場合は管理者までご連絡ください。
      </p>
    </div>
  </div>

  <div class="row">
    <a href="{{ route('question.create') }}" title="">
      <div class="btn btn-primary">
        質問を入力する
      </div>
    </a>
  </div>
</div>

@endsection
