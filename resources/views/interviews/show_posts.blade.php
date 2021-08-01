<link rel="stylesheet" href="/css/Interviews/interview.css">


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

<html>
{{-- <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head> --}}
<body>
<div id="app" class="container p-3">
    <h1 class="mb-3">記事の管理</h1>
    <!-- 一覧表示部分 -->
    @if (session('err_msg'))
    <div class="alert alert-success" role="alert">
        {{ session('err_msg') }}
    </div>
    @endif
    <div class="row">
    <div class="col-12">
        <div class="text-right pb-4">
            <a href="{{ route('interview.create_post') }}" class="btn btn-success">記事の追加</a>
        </div>
        <div class="search">
            <span class="text">仲間のインタビューを検索</span>
            <input name="text" type="text" placeholder="氏名を入力してください">
            <button name="search" type="submit"><i class="fas fa-search"></i></button>
        </div>
        <table class="table" class="col-12">
            <tr">
                <th class="table_header">NO</th>
                <th class="table_header">日付</th>
                <th class="table_header">タイトル</th>
                <th class="table_header">氏名</th>
                <th class="table_header">プロフィール</th>
                <th class="table_header"></th>
            </tr>
            @foreach ($interviews as $interview)
            <tr>
                <td>{{ $interview->id }}</td>
                <td>{{ $interview->updated_at->format('Y/m/d') }}</td>
                <td>{{ $interview->name }}</td>
                <td>{{ $interview->nickname }}</td>
                <td>{{ $interview->profile }}</td>
                <td class="text-right col-5">
                    <a href="{{ route('interview.check_post', [$interview->id]) }}" class="btn btn-info" target="_blank">確認</a>
                    <a href="{{ route('interview.update_post') }}" class="btn btn-warning" >変更</a>
                    <button type="button" class="btn btn-danger" >削除</button>
                </td>
            </tr>
            @endforeach
        </table>
    </div>
  </div>
</div>
<script src="https://unpkg.com/vue@3.0.2/dist/vue.global.prod.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script src="https://cdn.ckeditor.com/ckeditor5/24.0.0/classic/ckeditor.js"></script>

{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
</div>
{{-- 写真スライドjs読み込み --}}
<script type="module" src="{{ mix('js/slidePhoto.js') }}"></script>
@endsection
