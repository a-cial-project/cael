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
// 画像プレビュー
 const question_img = document.getElementById('file_upload');
 question_img.addEventListener("change", function(){
   // question_img要素のデータを取得
   const reader = this.files[0];
   const img_url = window.URL.createObjectURL(reader);
   console.log(img_url);
   // エレメントを生成しimg_view要素に挿入
   const img_view = document.getElementById('img_view');
   const img_element = document.createElement('img');
   img_element.src = img_url;
   img_view.appendChild(img_element);
   console.log(img_element);
   console.log(img_view);
 });
