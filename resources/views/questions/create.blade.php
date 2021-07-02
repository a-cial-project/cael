<head>
  <link rel="stylesheet" href="{{ asset('css/Questions/question_editor.css')}}">
</head>
@extends('layouts.app')

<!-- yeildに挿入 -->
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
<!-- 画像保存・プレビュー -->
  <div class="row col-12 m-3">
    <form id="input_file">
      <strong>[該当ソースコード・エラーコード画像]:</strong>
      <input type="file" accept="image/*" name="upload_img" class="ml-4" id="file_upload" multiple="multiple">
    </form>
  </div>
    <!-- 画像表示用要素　ここに保存した画像をimg要素で出力 -->
  <div class="img_view" id="img_view">
      
  </div>

  <!-- 質問投稿 -->
  <div class="row mx-2">
    <div class="col-6">
      <form action="{{ route('question.store') }}" method="post" enctype="multipart/form-data" id="question_post">
        @csrf
       <textarea id="editor" name="ckeditor" ></textarea>
    </div>
    <div class="col-6 border">
      <p class="font-weight-bold text-center my-3 border-bottom">プレビュー</p>
      <p class="preview" id="preview">
      </p>
    </div>
  </div>
  <input class="btn btn-primary offset-3 col-6 mt-3" type="submit" name="question_submit" value="質問確認画面へ">
  </form>
    <!-- module->ページの最後に読み込む -->
<script type="module" src="{{ mix('js/question_editor.js') }}"></script>
<!-- 画像のjsonデータ送信 -->
<script type="module">
  // 画像選択された際にイベント発動
// const upload_image = document.getElementById('file_upload');
// upload_image.addEventListener("change", function(event){
// // データの形成①
//    const image_data = upload_image.files[0];
//    // Formdataオブジェクトの作成とname,valueの設定
//    const form_data = new FormData();
//    form_data.append("image", image_data);
// // json形式でデータ送信
//   // インスタンスの生成
//    let xhr = new XMLHttpRequest();
//   // csrfトークンの生成
//    let csrf_token = document.getElementById('csrf_token').getAttribute('content');
//   // 送信先の設定
//    xhr.open('post','/questionImgUpload');
//   // ヘッダーの設定
//    xhr.setRequestHeader('X-CSRF-Token', csrf_token);
//   // データ送信（①で形成したデータ）
//    xhr.send(form_data);

// // 通信後の挙動(画像表示とinputタグのデータ定義)
//    xhr.onreadystatechange = function(){
//     // xhrクライアントの状態がDONE=4　操作完了
//     if(this.readyState == 4 && this.status == 200){
//       console.log(this.responseText);
//     // 表示用のエレメント作成(imgタグ・クラス名生成)
//       const img_view = document.getElementById('img_view');
//       const img_data = document.createElement('img');
//       img_data.className = 'upload_img';
//       // コントローラからreturnされたurlがresponseに格納
//       img_data.src = this.response;
//       img_view.appendChild(img_data);
//     // データ送信用のエレメント作成(inputタグ・クラス名生成（)
//     }
//    }
// });

// jsonでphpにデータを渡しデータベースに格納
// phpから送られたデータをjavascriptbに渡し、img要素を追加する
</script>

@endsection

