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
        <form action="{{ route('interview.search_by_admin') }}" method="GET">
            @csrf
        <div class="search">
            <span class="text">仲間のインタビューを検索</span>
                <input class="" name="search" type="text" placeholder="タイトルかニックネームを入力してください">
                <button type="submit"><i class="fas fa-search"></i></button>
        </div>
        </form>
        <div class="article-form bg-white p-4 shadow">
        <table class="table" class="col-12">
            <tr">
                <th class="table_header">NO</th>
                <th class="table_header">日付</th>
                <th class="table_header">タイトル</th>
                <th class="table_header">ニックネーム</th>
                <th class="table_header">プロフィール</th>
                <th class="table_header"></th>
                <th class="table_header"></th>

            </tr>
            @foreach ($interviews as $interview)
            <tr class="col-12">
                <td class="table_data">{{ $interview->id }}</td>
                <td class="table_data">{{ $interview->updated_at->format('Y/m/d') }}</td>
                <td class="table_data">{{ $interview->name }}</td>
                <td class="table_data">{{ $interview->nickname }}</td>
                <td class="table_data text-break">{{ $interview->profile }}</td>
                  <div class="admin_btn">
                      <td class="interview_btn px-0 col-1">
                          <a href="{{ route('interview.check_post', [$interview->id]) }}" class="btn btn-info" target="_blank">確認</a>
                      </td>
                      <td class="interview_btn px-0 col-1"">
                          <a href="{{ route('interview.update_post', [$interview->id]) }}" class="btn btn-warning" target="_blank">変更</a>
                      </td>
                      <td class="interview_btn px-0 col-1"">
                          <form action="{{ route('interview.destroy_post', $interview->id) }}" method="POST" onsubmit="return checkDelete()" class="delete_btn">
                          @csrf
                          <button type="submit" class="btn btn-danger">削除</button>
                          </form>
                      </td>
                    </div>

            </tr>
            @endforeach
        </table>
        <div class="d-flex justify-content-center"">
            {{ $interviews->links() }}
        </div>
      </div>
    </div>
  </div>
</div>
<script>
    function checkDelete() {
        if (window.confirm('削除してよろしいですか')) {
            return true;
        } else {
            return false;
        }
    }
</script>
<script src="https://unpkg.com/vue@3.0.2/dist/vue.global.prod.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script src="https://cdn.ckeditor.com/ckeditor5/24.0.0/classic/ckeditor.js"></script>

{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
</div>
{{-- 写真スライドjs読み込み --}}
{{-- <script type="module" src="{{ mix('js/slidePhoto.js') }}"></script> --}}
@endsection
