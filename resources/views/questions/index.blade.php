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
  <div class="row my-3">
    <div class="col-6">
      <form action="index_submit" method="get" accept-charset="utf-8">
        @csrf
        <input type="text" name="search" placeholder="検索" class="w-75">
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
    <div class="col-6">
      <a href="{{ route('question.create') }} " title=""><div class="btn btn-primary w-75">
        質問する
      </div></a>
    </div>
  </div>

  <div class="row">
    <div class="col-7">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">回答済み</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">未回答</a>
        </li>
      </ul>
    </div>
    <div class="col-5 border rounded text-center">
      <p class="py-3 border-bottom" style="font-weight: bold;">カリキュラムカテゴリー</p>
      @foreach($category as $val)
        <p class="border-bottom">{{ $val }}</p>
      @endforeach
    </div>
  </div>
</div>

@endsection
