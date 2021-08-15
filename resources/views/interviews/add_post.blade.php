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
        <h5 class="section-title h1 border-bottom" style="padding:10px;">記事の投稿</h5>
            <div class="article-form bg-white p-4 shadow">
                <form method="POST" action="{{ route('interview.store_post')}}" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <div class="input-field">
                            <div>
                                <input class="input-area form-control" type="text-input" name="name"  placeholder="タイトル" value="{{ old('name')}}">
                            </div>
                        </div>
                        <div >
                            <div class="input-field">
                                <input class="input-area form-control" type="text-input" name="nickname"  placeholder="ニックネーム" value="{{ old('nickname')}}">
                            </div>
                        </div>
                        <div class="input-field">
                            <div>
                                <input class="input-area form-control" type="text-input" name="sport" placeholder="スポーツ種目" value="{{ old('sport')}}">
                            </div>
                        </div>

                        <div style="width:100%" class="input-field">
                            <div>
                                <textarea class="input-area form-control" style="height:80px" name="profile" placeholder="プロフィール（１００文字以内）">{{ old('profile')}}</textarea>
                            </div>
                        </div>
                        <div style="width:100%">
                            <label for="text-input">記事の内容</label>
                            <div>
                                <textarea id="ckeditor" name="content">{{ old('content')}}</textarea>
                            </div>
                        </div>
                        <div class="text-right pt-4">
                            <button type="submit" class="btn btn-secondary mr-2">キャンセル</button>
                            <button type="submit" class="btn btn-primary" >保存する</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col text-center mt-5">
                <a href="/manage_posts" class="btn btn-primary">管理画面へ戻る</a>
            </div>
    </div>

</section>

{{-- ckeditorの読み込み --}}
<script src="//cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
</div>
{{-- ckeditor 画像アップロード --}}
<script src="{{ asset('ckeditor/ckeditor.js')}}"></script>
<script>

    CKEDITOR.replace('ckeditor', {
        filebrowserUploadUrl: "{{ route('interview.store_post', ['_token' => csrf_token() ]) }}",
        filebrowserUploadMethod: 'form'
    });
</script>
{{-- 写真スライドjs読み込み --}}
<script type="module" src="{{ mix('js/slidePhoto.js') }}"></script>
@endsection
