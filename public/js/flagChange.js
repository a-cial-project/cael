/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/js/Chats/flagChange.js ***!
  \******************************************/
window.onload = function (event) {
  window.scrollTo(0, document.body.scrollHeight);
};

window.addEventListener('blur', function (e) {
  var room_id = document.getElementById("room_id");
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録
  // Cancel the event as stated by the standard.

  e.preventDefault(); // Chrome requires returnValue to be set.

  e.returnValue = '';
  xhr.open('post', '/flagchange');
  xhr.setRequestHeader('X-CSRF-Token', token); // 追加
  // (4) フォームに入力されたデータを取得

  fd.append('room_id', room_id.value);
  fd.append('flag', 'out');
  xhr.send(fd);
});
window.addEventListener('focus', function (e) {
  var room_id = document.getElementById("room_id");
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録
  // Cancel the event as stated by the standard.

  e.preventDefault(); // Chrome requires returnValue to be set.

  e.returnValue = '';
  xhr.open('post', '/flagchange');
  xhr.setRequestHeader('X-CSRF-Token', token); // 追加
  // (4) フォームに入力されたデータを取得

  fd.append('room_id', room_id.value);
  fd.append('flag', 'in');
  xhr.send(fd);
});
/******/ })()
;