window.onload = function(){
  // ckeditorの実装
  const ckeditor = CKEDITOR.replace("editor", {
     uiColor: "#EEEEEE",
     height:600,
      toolbarGroups: [
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
    { name: 'links', groups: [ 'links' ] },
    { name: 'insert', groups: [ 'insert' ] },
    '/',
    { name: 'styles', groups: [ 'styles' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'colors', groups: [ 'colors' ] },
    { name: 'tools', groups: [ 'tools' ] },
    { name: 'others', groups: [ 'others' ] },
    { name: 'about', groups: [ 'about' ] },
    // 「ソース」削除
    // { name: 'document', groups: [ 'mode', 'document', 'doctools' ] }
  ],
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

function json(url){
    // リクエストインスタンスの生成
   var xhr = new XMLHttpRequest();
  // csrfトークンの生成
   let csrf_token = document.getElementById('csrf_token').getAttribute('content');
   // 送信先の設定
   xhr.open('post',url);
   // ヘッダーの設定
   xhr.setRequestHeader('X-CSRF-Token', csrf_token);
   return xhr;
}
// 画像アップロード コントローラへ送信・s3アップロード後フルパスを取得
const upload_image = document.getElementById('file_upload');
upload_image.addEventListener("change", function(event){
// データの形成
   var image_data = upload_image.files[0];
   // Formdataオブジェクトの作成とname,valueの設定
   var form_data = new FormData();
   form_data.append("image", image_data);
   // オブジェクトの中身確認
   console.log(...form_data.entries());
// json生成
  // リクエストインスタンスの生成
   var xhr = json('/questionImgUpload');
// データ送信
  xhr.send(form_data);

// 通信後の挙動(画像表示とinputタグのデータ定義)
   xhr.onreadystatechange = function(){
    // xhrクライアントの状態がDONE=4　操作完了で発火
      if(this.readyState == 4 && this.status == 200){
       // 表示用のエレメント作成(imgタグ・id生成,削除ボタンの生成)
         const img_view = document.getElementById('img_views');
         const img_div = document.createElement("div");
         const img_input = document.createElement("input");
         img_input.type="text";
         img_div.className = "img_view";
         const img_element = document.createElement('img');
         const img_url = String(this.response);
         img_input.setAttribute("name","image[]");
         img_input.className="img_input";
         var img_array = img_url.split('/');
         var img_id = img_array[4];
         img_input.value=img_id;
         img_input.style.display="none";
       // 削除する際の判別idを指定
         img_element.setAttribute('id', img_id);
         img_element.className = "upload_imgs";
         img_element.src = this.response;
         img_div.appendChild(img_element);
         img_view.appendChild(img_div);
         const question_post = document.getElementById("question_post");
         question_post.appendChild(img_input);
       // 作成したエレメントをホバーした時イベント発火
         img_element.addEventListener("mouseover", function(){
         // マウスオーバーした親要素に削除テキスト、透過css判定id付与
            this.parentNode.setAttribute("id","del_img");
            const del_btn = document.createElement("h1");
            del_btn.setAttribute("id","del_btn");
            del_btn.innerHTML = "×";
            this.parentNode.appendChild(del_btn);
         });
         // マウスオーバーが外れた時のクラス、id削除
         img_element.addEventListener("mouseleave", function(){
            // del_imgの削除(透過css)
            document.getElementById("del_img").removeAttribute("id");
            // del_btnの削除(削除テキスト)
            document.getElementById("del_btn").remove();
         });
         // クリックした時の画像削除イベント発火
         img_element.addEventListener("click", function(){
            if (confirm("画像を削除しますか？")){
               del_img(this);
            }
         });
      };
   };
});
// 
function del_img(request) {
   var xhr = json("/questionImgRemove");
   var form_data = new FormData();
   var image_url = request.getAttribute("id");
   form_data.append("image", image_url);
   xhr.send(form_data);
   xhr.onreadystatechange = function(){
      // xhrクライアントの状態がDONE=4　操作完了で発火
      if(this.readyState == 4 && this.status == 200){
         request.parentNode.remove();
         request.remove();
         // inputのvalueがrequest.idと同じだったらinput削除
         const img_inputs = document.getElementsByClassName("img_input");
         for (var i = 0; i<img_inputs.length; i++) {
            if(request.id == img_inputs[i].value){
               img_inputs[i].remove();
            }
         }
      }
   }
}




