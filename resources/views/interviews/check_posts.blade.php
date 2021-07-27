

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
<head><link rel="stylesheet" href="/css/Interviews/interview.css"></head>
<body>
<div id="app" class="container p-3">
    {{-- <h1 class="mb-4">{{ $post->title }}</h1> --}}
    {{-- {!! $post->description !!} --}}
</div>
</body>
</html>

{{-- 写真スライドjs読み込み --}}
<script type="module" src="{{ mix('js/slidePhoto.js') }}"></script>
@endsection
