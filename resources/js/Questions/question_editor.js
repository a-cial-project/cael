 window.onload = function(){
     // ckeditorの実装
     const ckeditor = CKEDITOR.replace("editor", {
        uiColor: "#EEEEEE",
        height:600,
     });
     const preview = document.getElementById('preview');
     // 実装準備完了時の関数読み込み
     ckeditor.on("instanceReady",function(e){
     // ckeditorのインスタンス化
      const editor_instance =CKEDITOR.instances.editor;
     // 初期値設定
      editor_instance.setData(
        "<h3>[質問内容]:</h3><strong><br>[発生している問題]:</strong><p></p><br><br><strong>[試したこと]:</strong><p></p><br><br><strong>[備考欄（バージョン指定やその他知りたいこと)]:</strong><p></p>");
      // 初期値をページ読み込み時に作成
      preview.innerHTML = editor_instance.getData();
     // リアルタイム表示関数読み込み
      editor_instance.document.on("keyup",function(){
     // オブジェクトデータ取得
        const data = editor_instance.getData();
     // 指定elementIdに表示
        preview.innerHTML = data;
      });
     });
 };

// 画像アップロード コントローラへ送信・s3アップロード後フルパスを取得
const upload_image = document.getElementById('file_upload');
upload_image.addEventListener("change", function(event){
// データの形成
   const image_data = upload_image.files[0];
   // Formdataオブジェクトの作成とname,valueの設定
   const form_data = new FormData();
   form_data.append("image", image_data);
   // オブジェクトの中身確認
   console.log(...form_data.entries());
// json生成
  // リクエストインスタンスの生成
   let xhr = new XMLHttpRequest();
  // csrfトークンの生成
   let csrf_token = document.getElementById('csrf_token').getAttribute('content');
  // 送信先の設定
   xhr.open('post','/questionImgUpload');
  // ヘッダーの設定
   xhr.setRequestHeader('X-CSRF-Token', csrf_token);
// データ送信
  xhr.send(form_data);

// 通信後の挙動(画像表示とinputタグのデータ定義)
   xhr.onreadystatechange = function(){
    // xhrクライアントの状態がDONE=4　操作完了で発火
    if(this.readyState == 4 && this.status == 200){
    // 表示用のエレメント作成(imgタグ・id生成,削除ボタンの生成)
      const img_view = document.getElementById('img_view');
      const img_element = document.createElement('img');
      const img_url = String(this.response);
      const img_array = img_url.split('/');
      const img_id = img_array[4];
      // 削除する際の判別idを指定
      img_element.setAttribute('id', img_id);
      img_element.src = this.response;
      img_view.appendChild(img_element);
    }
   }
});

// 画像削除
// クリックしたimg要素のsrcを取得
