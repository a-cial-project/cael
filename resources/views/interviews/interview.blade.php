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
    <div class="title_bg">
        <div class="title_text">
            <h3 style="text-align: center;" class="pt-5">Interview</h3>
            <p style="text-align: center;"><社員インタビュー></p>
        </div>
    </div>
    <h3 class="title">インタビューを見て仲間をもっと知ろう</h3>
    <div id="search-all" class="col-xs-3 col-md-8 col-lg-６">
        <form action="{{ route('interview.search_by_user') }}" method="GET">
          <div class="search">
            <span class="text">仲間のインタビューを検索</span>
            <input name="search" type="text" placeholder="タイトルかニックネームを入力してください">
            <button type="submit"><i class="fas fa-search"></i></button>
          </div>
        </div>
        </form>
  </div>
  <!-- Team members -->
<section id="team" class="pb-5">
    <div class="container">
        <h5 class="section-title h1 border-bottom" style="padding:10px;">AAT事業部</h5>
        <div id="article" class="row">
            <!-- member -->
            @foreach ($interviews as $interview)
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">{{ $interview->nickname }}</h4>
                                    <p class="card-text">{{ $interview->name }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">プロフィール</h4>
                                    <p class="card-text text-break">{{ $interview->profile }}
                                    </p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fab fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fas fa-blog"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="{{ route('interview.show', [$interview->id]) }}" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
        <div class="d-flex justify-content-center"">
            {{ $interviews->links() }}
        </div>
    </div>

</section>

</div>
@endsection
