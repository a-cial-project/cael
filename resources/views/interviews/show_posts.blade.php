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
    <h1 class="mb-4">記事の管理</h1>

    <!-- 一覧表示部分 -->
    <div>
        <div class="text-right pb-4">
            <a href="/post" class="btn btn-success">追加</a>
        </div>
        <table class="table">
            <tr v-for="post in posts">
                <td v-text="post.title"></td>
                <td class="text-right">
                    <a :href="'/post/'+ post.id" class="btn btn-light mr-2" target="_blank">確認</a>
                    <a href="" class="btn btn-warning mr-2" >変更</a>
                    <button type="button" class="btn btn-danger" >削除</button>
                </td>
            </tr>
        </table>
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
