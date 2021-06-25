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
      <a href="{{ route('question.info') }} " title=""><div class="btn btn-primary w-75">
        質問する
      </div></a>
    </div>
  </div>
  <div class="row">
    <div class="col-7">

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link {{ $status == 0 ? 'active' : '' }}" aria-current="page" href="{{ route('question.index',['status' => 0, 'question_category_id' => $current_category]) }}">未回答</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {{ $status == 1 ? 'active' : '' }}" href="{{ route('question.index',['status' => 1, 'question_category_id' => $current_category]) }}">回答済み</a>
        </li>
      </ul>

      <table class="table table-hover">
        <tbody>
          @foreach($questions as $question)
          <tr>
            <td>
              <a href="{{ route('question.show',['question' => $question->id ]) }}" title="">{{ $question->title }}</a>
              <p>{{ $question->created_at }}</p>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
    <div class="col-5 border rounded text-center">
      <p class="py-3 border-bottom" style="font-weight: bold;">カリキュラムカテゴリー</p>
      <p>
        <a href="{{ route('question.index') }}" class="btn btn-outline-primary w-100 {{ $current_category === 0 ? 'active' : '' }}" title="">全てのカテゴリー</a>
      </p>
      @foreach($categories as $category)
      <p>
        <a href="{{ route('question.index',['question_category_id'=> $category->id]) }}" title="" class="btn btn-outline-primary w-100 {{ $current_category !== 0 && $current_category->id == $category->id ? 'active btn-primary' : ''}} ">{{ $category->name }}</a>
      </p>
      @endforeach
    </div>
  </div>
</div>

@endsection
