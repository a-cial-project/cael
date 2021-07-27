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
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#interview-1" role="tab" aria-controls="home">なぜアーシャルデザインに入社したか</a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#interview-2" role="tab" aria-controls="profile">なぜエンジニアを選んだか</a>
                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#interview-3" role="tab" aria-controls="messages">休日の過ごし方</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#interview-4" role="tab" aria-controls="settings">将来の自分</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#interview-5" role="tab" aria-controls="settings">インタビュー動画</a>
                  </div>
                </div>
                <div class="interviewee mt-2">
                    <p class="small">エンジニア 眞壁大二朗/2020年12月入社</p>
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
                  <div class="tab-pane fade show active" id="interview-1" role="tabpanel" aria-labelledby="list-home-list">
                    <h5 class="section-title h1 border-bottom" style="padding:10px;">なぜアーシャルデザインに入社したか</h5>
                    <div class="interview_wrap">
                        <div class="interview_img">
                            <img src="/img/interview/test_people2.jpg" alt="" class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="interview_text1">
                            <h1 class="interview-title h5 font-weight-bold">今まで携わってきたスポーツに恩返しがしたい</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolores earum repellendus quo quia animi, modi quas. Quis eius similique natus eveniet quisquam fugit ad! Expedita quo beatae non? Consectetur.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt cumque eum quos repellat voluptate rerum, distinctio nihil, modi recusandae doloremque eos. Iste beatae quia mollitia optio sit debitis ut!
                            </p>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="interview-2" role="tabpanel" aria-labelledby="list-profile-list">
                    <h5 class="section-title h1 border-bottom" style="padding:10px;">なぜエンジニアを選んだか</h5>
                    <div class="interview_wrap">
                        <div class="interview_text1">
                            <h1 class="interview-title h5 font-weight-bold">自分が作ったサービスを世の中に浸透させたい</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolores earum repellendus quo quia animi, modi quas. Quis eius similique natus eveniet quisquam fugit ad! Expedita quo beatae non? Consectetur.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt cumque eum quos repellat voluptate rerum, distinctio nihil, modi recusandae doloremque eos. Iste beatae quia mollitia optio sit debitis ut!
                            </p>
                        </div>
                        <div class="interview_img">
                            <img src="/img/interview/test_people2.jpg" alt="" class="img-fluid" alt="Responsive image">
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="interview-3" role="tabpanel" aria-labelledby="list-messages-list">
                    <h5 class="section-title h1 border-bottom" style="padding:10px;">休日の過ごし方</h5>
                    <div >
                        <div class="interview_img">
                            <div class="slide">
                                <img src="/img/interview/test_people.jpg" alt="">
                                <img src="/img/interview/test_people2.jpg" alt="">
                                <img src="/img/interview/test_people3.jpg" alt="">
                                <img src="/img/interview/test_people4.jpg" alt="">
                            </div>
                        </div>
                        <div class="interview_text1">
                            <h1 class="interview-title h5 font-weight-bold">仲間とフットサルの大会に出ています</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolores earum repellendus quo quia animi, modi quas. Quis eius similique natus eveniet quisquam fugit ad! Expedita quo beatae non? Consectetur.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt cumque eum quos repellat voluptate rerum, distinctio nihil, modi recusandae doloremque eos. Iste beatae quia mollitia optio sit debitis ut!
                            </p>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="interview-4" role="tabpanel" aria-labelledby="list-settings-list">
                    <h5 class="section-title h1 border-bottom" style="padding:10px;">将来の自分</h5>
                    <div class="interview_wrap">
                        <div class="interview_img">
                            <img src="/img/interview/test_people5.jpg" alt="" class="img-fluid" alt="Responsive image">
                        </div>
                        <div class="interview_text1">
                            <h1 class="interview-title h5 font-weight-bold">やるべきこと以外に、やりたいことも決して諦めない</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolores earum repellendus quo quia animi, modi quas. Quis eius similique natus eveniet quisquam fugit ad! Expedita quo beatae non? Consectetur.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt cumque eum quos repellat voluptate rerum, distinctio nihil, modi recusandae doloremque eos. Iste beatae quia mollitia optio sit debitis ut!
                            </p>
                        </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="interview-5" role="tabpanel" aria-labelledby="list-settings-list">
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
<!-- Team members -->

<form method="POST" action="">
    @csrf
    <div >
        <label for="title_post">氏名</label>
        <div>
            <input type="text-input" name="title">
        </div>
    </div>
    <div >
        <label for="title_post">ニックネーム</label>
        <div>
            <input type="text-input" name="title">
        </div>
    </div>
    <div >
        <label for="title_post">スポーツ種目</label>
        <div>
            <input type="text-input" name="title">
        </div>
    </div>

    <div style="width:100%">
        <label for="text-input">プロフィール</label>
        <div>
            <textarea class="ckeditor" name="text"></textarea>
        </div>
    </div>
    <div style="width:100%">
        <label for="text-input">内容</label>
        <div>
            <textarea class="ckeditor" name="text"></textarea>
        </div>
    </div>

    <div>
        <button type="submit">Post</button>
    </div>
</form>

{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
</div>
{{-- 写真スライドjs読み込み --}}
<script type="module" src="{{ mix('js/slidePhoto.js') }}"></script>
@endsection
