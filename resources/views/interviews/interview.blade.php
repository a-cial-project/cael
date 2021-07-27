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
            <p style="text-align: center;" ><社員インタビュー></p>
        </div>
    </div>
    <h3 class="title">インタビューを見て仲間をもっと知ろう</h3>
    <div id="search-all" class="col-xs-3 col-md-8 col-lg-６">
        <form name="set_text" action="main.php" method="post">
          <div class="search">
            <span class="text">仲間のインタビューを検索</span>
            <input name="text" type="text" placeholder="氏名を入力してください">
            <button name="search" type="submit"><i class="fas fa-search"></i></button>
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
            {{-- <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <span>SES</span>
                                    <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり、今までに10カ国くらい観光しました。気軽に声かけてください！
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
                                    <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}
            <!-- member -->
            <!-- member -->
            {{-- <div class="col-xs-12 col-sm-6 col-md-4" id="article">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <span>カリキュラム生</span>
                                    <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり、今までに10カ国くらい観光しました。気軽に声かけてください！</p>
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
                                    <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- member -->
            <!-- member -->
            <div class="col-xs-12 col-sm-6 col-md-4" id="article">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <span>カリキュラム生</span>
                                    <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり今までに10カ国くらい観光しました。気軽に声かけてください！</p>
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
                                    <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- member -->
            <!-- member -->
            <div class="col-xs-12 col-sm-6 col-md-4" id="article">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <span>カリキュラム生</span>
                                    <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり今までに10カ国くらい観光しました。気軽に声かけてください！</p>
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
                                    <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- member -->
            <!-- member -->
            <div class="col-xs-12 col-sm-6 col-md-4" id="article">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <span>SES</span>
                                    <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり、今までに10カ国くらい観光しました。気軽に声かけてください！</p>
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
                                    <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- member -->
            <!-- member -->
            <div class="col-xs-12 col-sm-6 col-md-4" id="article">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <span>SES</span>
                                    <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">眞壁大二朗</h4>
                                    <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり、今までに10カ国くらい観光しました。気軽に声かけてください！</p>
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
                                    <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}
            <!--member -->
        </div>
        <div class="col text-center">
            <a href="#" class="btn btn-info btn-lg" id="interview-btn">More</a>
        </div>
    </div>

</section>
<!-- Team members -->
<script>
    const article = document.getElementById("article");
    // console.log(article);
    // const content = document.getElementsByClassName("row");
    function loadInterview() {

            const postElement = document.createElement('div');
            postElement.setAttribute('id', 'posted_article');
            // for (let num=0; num<6; num++) {
            // const post = document.getElementById('posted_article');
            
           postElement.innerHTML = `
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src="img/interview/test_people5.jpg" alt="card image"></p>
                                        <h4 class="card-title">眞壁大二朗</h4>
                                        <span>SES</span>
                                        <p class="card-text">英語×プログラミングを極めて、スポーツへ貢献する</p>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">眞壁大二朗</h4>
                                        <p class="card-text">最近の休日は、フットサル、旅行やサウナによく行きます 留学経験もあり、今までに10カ国くらい観光しました。気軽に声かけてください！</p>
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
                                        <a href="/show" class="btn btn-info btn-sm" id="interview-btn">Go interview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
               article.appendChild(postElement);
            // }
        //    interview = document.createDocumentFragment(postElement);
        //    article.appendChild(interview);

        }

    loadInterview();



    // window.addEventListener('scroll', () => {
    //     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    //         loadInterview();
    //     }
    // });

</script>
</div>
@endsection
