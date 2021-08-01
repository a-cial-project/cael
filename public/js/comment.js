/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/comment.js ***!
  \*********************************/
window.addEventListener('DOMContentLoaded', function () {
  var addUser = document.getElementsByClassName("user");
  var addComment = document.getElementsByClassName("comment"); // (1) XMLHttpRequestオブジェクトとFormDataオブジェクトのコンストラクタを実行

  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  var submitBtn = document.getElementById("submit");
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    xhr.open('post', submitBtn.dataset.url);
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加
    // (4) フォームに入力されたデータを取得

    var user_id = document.querySelector('#user_id');
    var type_value = document.querySelector('#type_value');
    var content = document.querySelector('#content'); // (5) FormDataオブジェクトにデータをセット

    fd.append('user_id', user_id.value);
    fd.append('type_value', type_value.value);
    fd.append('content', content.value); // (6) リクエスト（要求）を送信

    xhr.send(fd);
  }); // (7) 通信完了したらレスポンスからJSONデータを取得してコンソール出力

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var res = JSON.parse(xhr.response);
      console.log(res[0]['comment'], res[1]['name']);
      var viewcomment = document.getElementsByClassName('viewcomment');
      var section = document.createElement('div');
      section.className = 'section';
      viewcomment[0].insertBefore(section, viewcomment[0].firstElementChild);
      var freeComment = document.createElement('div');
      freeComment.className = 'comment';
      freeComment.innerHTML = res[0]['comment'];
      section.insertBefore(freeComment, section.firstElementChild);
      var commentUser = document.createElement('div');
      commentUser.className = 'user';
      commentUser.innerHTML = res[1]['name'];
      section.insertBefore(commentUser, section.firstElementChild);
      content.value = '';
    }
  });
});
/******/ })()
;