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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/comment.js":
/*!*********************************!*\
  !*** ./resources/js/comment.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ 7:
/*!***************************************!*\
  !*** multi ./resources/js/comment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/cael/resources/js/comment.js */"./resources/js/comment.js");


/***/ })

/******/ });