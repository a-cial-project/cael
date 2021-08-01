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
    <h1 class="mb-4">{{ $interview->name }}</h1>
    {!! $interview->content !!}
</div>
</body>
</html>

<script src="https://unpkg.com/vue@3.0.2/dist/vue.global.prod.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script src="https://cdn.ckeditor.com/ckeditor5/24.0.0/classic/ckeditor.js"></script>

{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
</div>
{{-- 写真スライドjs読み込み --}}
{{-- <script type="module" src="{{ mix('js/slidePhoto.js') }}"></script> --}}
@endsection
