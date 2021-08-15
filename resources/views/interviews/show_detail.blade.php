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

<div class="container">
    <div class="header_bg">
        <div class="header_text">
            <h5 style="text-align: center;" class="pt-2"><社員インタビュー></h5>
            <div class="row">
                <div class="col-11 col text-center ml-auto mr-auto small" class="interview_nav">
                  <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active p-3" id="list-home-list" data-toggle="list" href="#interview-1" role="tab" aria-controls="home">{{ $interview->name }}</a>
                    <a class="list-group-item list-group-item-action p-3" id="list-settings-list" data-toggle="list" href="#interview-2" role="tab" aria-controls="settings">インタビュー動画</a>
                  </div>
                </div>
                <div class="interviewee mt-2">
                    <p class="small">{{ $interview->nickname }}/{{ $interview->sport }}</p>
                </div>
              </div>
            </div>
            <div class="header_img col-6" >
                <img src="/img/interview/test_people.jpg" alt="" class="img-fluid" alt="Responsive image">
            </div>
    </div>
  <!-- Team members -->
<section id="interview" class="pb-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active text-break" id="interview-1" role="tabpanel" aria-labelledby="list-home-list">
                    <h5 class="section-title h1 border-bottom" style="padding:10px;">{{ $interview->name }}</h5>
                    <div class="article-form bg-white p-4 shadow">
                        {!! $interview->content !!}
                    </div>
                    <div class="col text-center mt-5">
                        <a href="/interview" class="btn btn-primary">一覧へ戻る</a>
                    </div>
                </div>
                <div class="tab-pane fade" id="interview-2" role="tabpanel" aria-labelledby="list-settings-list">
                  <h5 class="section-title h1 border-bottom" style="padding:10px;">インタビュー動画</h5>
                  <div class="interview_movie">
                      <video controls class="play_video">
                          <source src="/img/interview/test_movie.mp4">
                          <source src="/img/interview/test_movie.ogv">
                          <source src="/img/interview/test_movie.webm">
                      </video>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</section>
</div>

{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
{{-- 写真スライドjs読み込み --}}
<script type="module" src="{{ mix('js/slidePhoto.js') }}"></script>
@endsection
