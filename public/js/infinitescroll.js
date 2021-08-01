/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/infinitescroll.js ***!
  \****************************************/
var throttle = function (callback) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  var time = Date.now(),
      lag,
      debounceTimer,
      debounceDelay = 16;
  return function (callback) {
    lag = time + interval - Date.now();

    if (lag < 0) {
      //console.log( time + "：throttle：" + lag);
      callback();
      time = Date.now();
    } else {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        //console.log( time + "：debounce：" + (interval - lag + debounceDelay));
        callback();
      }, interval - lag + debounceDelay);
    }
  };
}();

var xhr = new XMLHttpRequest();
var fd = new FormData();
var token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

var scrollFlag = 55; // 間引きしたい処理

function myCallback() {
  if (window.scrollY < scrollFlag) {
    var min = document.getElementById('min').textContent;
    xhr.open('post', '/infinitescroll');
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加
    // (4) フォームに入力されたデータを取得

    fd.append('room_id', document.getElementById('room_id').value);
    fd.append('min', min);
    xhr.send(fd);
  }
}

; // イベント発火

window.addEventListener('scroll', function () {
  throttle(myCallback); //throttle(myCallback,64); //第二引数 インターバル時間
});
xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var res = JSON.parse(xhr.response);
    var all_message = document.getElementById('all_message');

    for (var i = 0; i <= res.length - 1; i++) {
      // 自分のメッセージ
      if (res[i].user_id == document.getElementById('user_id').value) {
        var loadMessage = document.createElement('div');
        loadMessage.className = 'row my_message mb-3';
        all_message.insertBefore(loadMessage, all_message.firstChild);
        var yourName = document.createElement('h6');
        yourName.innerHTML = 'あなた'; // メッセージの場合の処理

        if (res[i].message != null) {
          var _yourMessage = document.createElement('div');

          _yourMessage.className = 'message ml-auto';
          var message = document.createElement('p');
          message.innerHTML = res[i].id + res[i].message;

          _yourMessage.appendChild(message);

          loadMessage.appendChild(yourName);
          loadMessage.appendChild(_yourMessage);
        } else {
          var contentParent = document.createElement('div');
          contentParent.className = 'image_parent';

          if (res[i].content != null) {
            // 画像の場合の処理
            var image = document.createElement('img');
            image.className = 'content';
            image.src = res[i].content;
            contentParent.appendChild(image);
          } else if (res[i].movie != null) {
            // 動画の場合の処理
            var movie = document.createElement('video');
            movie.src = e.message.movie;
            movie.controls = "controls";
            contentParent.appendChild(movie);
          }
        }

        if (res[i].status == 0) {
          var messageStatus = document.createElement('span');
          messageStatus.innerHTML = '既読';
          loadMessage.appendChild(messageStatus);
        }
      } else {
        // 相手のメッセージ
        var _loadMessage = document.createElement('div');

        _loadMessage.className = 'row other_message mb-3';
        all_message.insertBefore(_loadMessage, all_message.firstChild);
        var otherName = document.createElement('h6');
        otherName.innerHTML = res[i].user.name; // メッセージの場合の処理

        if (res[i].message != null) {
          var otherMessage = document.createElement('div');
          otherMessage.className = 'message';

          var _message = document.createElement('p');

          _message.innerHTML = res[i].message;
          yourMessage.appendChild(_message);

          _loadMessage.appendChild(otherName);

          _loadMessage.appendChild(otherMessage);
        } else {
          var _contentParent = document.createElement('div');

          _contentParent.className = 'image_parent';

          if (res[i].content != null) {
            // 画像の場合の処理
            var _image = document.createElement('img');

            _image.className = 'content';
            _image.src = res[i].content;

            _contentParent.appendChild(_image);
          } else if (res[i].movie != null) {
            // 動画の場合の処理
            var _movie = document.createElement('video');

            _movie.src = e.message.movie;
            _movie.controls = "controls";

            _contentParent.appendChild(_movie);
          }
        }
      }
    }

    var last = res.slice(-1)[0];
    document.getElementById('min').textContent = last.id;
  }
});
/******/ })()
;