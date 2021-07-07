/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Chats/pusher.js":
/*!**************************************!*\
  !*** ./resources/js/Chats/pusher.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** multi ./resources/js/Chats/pusher.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/a-cial-project/cael/resources/js/Chats/pusher.js */"./resources/js/Chats/pusher.js");


/***/ })

/******/ });