 window.onload = function(){
     // ckeditorの実装
     const ckeditor = CKEDITOR.replace("editor", {
        uiColor: "#EEEEEE",
        height:600,
     });
     // 実装準備完了時の関数読み込み
     ckeditor.on("instanceReady",function(e){
     // ckeditorのインスタンス化
      const editor_instance =CKEDITOR.instances.editor;
     // 初期値設定
      editor_instance.setData(
        "<h3>[質問内容]:</h3><strong><br>[発生している問題]:</strong><p></p><br><br><strong>[試したこと]:</strong><p></p><br><br><strong>[備考欄（バージョン指定やその他知りたいこと)]:</strong><p></p>");
     // リアルタイム表示関数読み込み
      editor_instance.document.on("keyup",function(){
     // オブジェクトデータ取得
        const data = editor_instance.getData();
     // 指定elementIdに表示
        document.getElementById("preview").innerHTML=data;
      });
     });
 }