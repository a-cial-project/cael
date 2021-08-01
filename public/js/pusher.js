/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/Chats/pusher.js ***!
  \**************************************/
document.addEventListener('DOMContentLoaded', function () {
  var room_id = document.getElementById("room_id");
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  var submitBtn = document.getElementById("submit");
  var image = document.getElementById("image");

  submitBtn.onclick = function (e) {
    var message = document.getElementById("message");

    if (message.value.length < 1) {
      var errormsg = document.createElement('h4');
      errormsg.className = 'erromsg';
      errormsg.innerHTML = 'メッセージが入っていません。';
      message.before(errormsg);
      return;
    }

    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    xhr.open('post', '/message');
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加
    // (4) フォームに入力されたデータを取得

    fd.append('room_id', room_id.value);
    fd.append('message', message.value);
    xhr.send(fd);
  }; // (7) 通信完了したらレスポンスからJSONデータを取得してコンソール出力


  image.addEventListener('change', function (e) {
    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    xhr.open('post', '/message');
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加

    fd.append('room_id', room_id.value);
    fd.append('content', this.files[0]);
    xhr.send(fd);
  }, false);
  window.Echo.channel("cael").listen("MessageSent", function (e) {
    document.getElementById("message").value = '';
    var position = document.getElementById('all_message');

    if (e.message.room_id == room_id.value) {
      // 右側
      if (e.message.user_id == document.getElementById('user_id').value) {
        var newMessage = document.createElement('div');
        newMessage.className = 'row my_message';
        var otherName = document.createElement('h6');
        otherName.innerHTML = 'あなた';
        newMessage.appendChild(otherName);
        console.log(e.message.status == '0');

        if (e.message.message != null) {
          var massageBox = document.createElement('div');
          massageBox.className = 'message ml-auto';
          var messageP = document.createElement('p');
          messageP.innerHTML = e.message.message;
          massageBox.appendChild(messageP);
          newMessage.appendChild(massageBox);
          position.appendChild(newMessage);
        } else if (e.message.content != null) {
          var imgParent = document.createElement('div');
          imgParent.className = "image_parent";

          var _image = new Image();

          _image.className = 'content';
          _image.src = e.message.content;
          newMessage.appendChild(imgParent);
          imgParent.appendChild(_image);
          position.appendChild(newMessage);
        } else if (e.message.movie != null) {
          var _imgParent = document.createElement('div');

          _imgParent.className = "image_parent";
          var movie = document.createElement('video');
          movie.className = 'movie';
          movie.src = e.message.movie;
          movie.controls = "controls";
          newMessage.appendChild(_imgParent);

          _imgParent.appendChild(movie);

          position.appendChild(newMessage);
        }

        if (e.message.status == '0') {
          var messageStatus = document.createElement('span');
          messageStatus.innerHTML = '既読';
          newMessage.appendChild(messageStatus);
        }
      } else {
        // 左側
        var _newMessage = document.createElement('div');

        _newMessage.className = 'row other_message';
        var yourName = document.createElement('h6');
        yourName.innerHTML = e.message.user.name;

        _newMessage.appendChild(yourName);

        console.log(e.message);

        if (e.message.message != null) {
          var _massageBox = document.createElement('div');

          _massageBox.className = 'message';

          var _messageP = document.createElement('p');

          _messageP.innerHTML = e.message.message;

          _massageBox.appendChild(_messageP);

          _newMessage.appendChild(_massageBox);

          position.appendChild(_newMessage);
        } else if (e.message.content != null) {
          var _imgParent2 = document.createElement('div');

          _imgParent2.className = "image_parent";

          var _image2 = new Image();

          _image2.className = 'content';
          _image2.src = e.message.content;

          _newMessage.appendChild(_imgParent2);

          _imgParent2.appendChild(_image2);

          position.appendChild(_newMessage);
        } else if (e.message.movie != null) {
          var _imgParent3 = document.createElement('div');

          _imgParent3.className = "image_parent";

          var _movie = document.createElement('video');

          _movie.className = 'movie';
          _movie.src = e.message.movie;
          _movie.controls = "controls";

          _newMessage.appendChild(_imgParent3);

          _imgParent3.appendChild(_movie);

          position.appendChild(_newMessage);
        }
      }
    }
  });
});
/******/ })()
;