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
<section  id="interview" class="pb-5">
    <div class="container">
        <h5 class="section-title h1 border-bottom" style="padding:10px;">記事の編集</h5>
            <div class="article-form bg-white p-4 shadow">
                <form method="POST" action="{{ route('interview.update')}}">
                    @csrf
                    <div class="input-field">
                        <input type="hidden" name="id" value="{{ $interview->id }}">
                        <div>
                            <input class="input-area form-control" type="text-input" name="name"  placeholder="タイトル" value="{{ $interview->name }}">
                        </div>
                    </div>
                    <div >
                        <div class="input-field">
                            <input class="input-area form-control" type="text-input" name="nickname"  placeholder="ニックネーム" value="{{ $interview->nickname }}">
                        </div>
                    </div>
                    <div class="input-field">
                        <div>
                            <input class="input-area form-control" type="text-input" name="sport" placeholder="スポーツ種目" value="{{ $interview->sport }}">
                        </div>
                    </div>

                    <div style="width:100%" class="input-field">
                        <div>
                            <textarea class="input-area form-control" style="height:150px" name="profile" placeholder="プロフィール（１００文字以内）">{{ $interview->profile }}</textarea>
                        </div>
                    </div>
                    <div style="width:100%">
                        <label for="text-input">内容</label>
                        <div>
                            <textarea class="ckeditor" name="content">{{ $interview->content }}"</textarea>
                        </div>
                    </div>
                    <div class="text-right pt-4">
                        <button type="submit" class="btn btn-secondary mr-2">キャンセル</button>
                        <button type="submit" class="btn btn-primary" >編集する</button>
                    </div>
                </form>
            </div>
            <div class="col text-center mt-5">
                <a href="/manage_posts" class="btn btn-primary">管理画面へ戻る</a>
            </div>
    </div>

</section>
<!-- Team members -->



{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
</div>
{{-- 写真スライドjs読み込み --}}
<script type="module" src="{{ mix('js/slidePhoto.js') }}"></script>
@endsection