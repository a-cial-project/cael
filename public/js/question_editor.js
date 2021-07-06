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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Questions/question_editor.js":
/*!***************************************************!*\
  !*** ./resources/js/Questions/question_editor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.onload = function () {
  // ckeditorの実装
  var ckeditor = CKEDITOR.replace("editor", {
    uiColor: "#EEEEEE",
    height: 600
  });
  var preview = document.getElementById('preview'); // 実装準備完了時の関数読み込み

  ckeditor.on("instanceReady", function (e) {
    // ckeditorのインスタンス化
    var editor_instance = CKEDITOR.instances.editor; // 初期値設定

    editor_instance.setData("<h3>[質問内容]:</h3><strong><br>[発生している問題]:</strong><p></p><br><br><strong>[試したこと]:</strong><p></p><br><br><strong>[備考欄（バージョン指定やその他知りたいこと)]:</strong><p></p>"); // 初期値をページ読み込み時に作成

    preview.innerHTML = editor_instance.getData(); // リアルタイム表示関数読み込み

    editor_instance.document.on("keyup", function () {
      // オブジェクトデータ取得
      var data = editor_instance.getData(); // 指定elementIdに表示

      preview.innerHTML = data;
    });
  });
};

function json(url) {
  // リクエストインスタンスの生成
  var xhr = new XMLHttpRequest(); // csrfトークンの生成

  var csrf_token = document.getElementById('csrf_token').getAttribute('content'); // 送信先の設定

  xhr.open('post', url); // ヘッダーの設定

  xhr.setRequestHeader('X-CSRF-Token', csrf_token);
  return xhr;
} // 画像アップロード コントローラへ送信・s3アップロード後フルパスを取得


var upload_image = document.getElementById('file_upload');
upload_image.addEventListener("change", function (event) {
  var _console;

  // データの形成
  var image_data = upload_image.files[0]; // Formdataオブジェクトの作成とname,valueの設定

  var form_data = new FormData();
  form_data.append("image", image_data); // オブジェクトの中身確認

  (_console = console).log.apply(_console, _toConsumableArray(form_data.entries())); // json生成
  // リクエストインスタンスの生成


  var xhr = json('/questionImgUpload'); // データ送信

  xhr.send(form_data); // 通信後の挙動(画像表示とinputタグのデータ定義)

  xhr.onreadystatechange = function () {
    // xhrクライアントの状態がDONE=4　操作完了で発火
    if (this.readyState == 4 && this.status == 200) {
      // 表示用のエレメント作成(imgタグ・id生成,削除ボタンの生成)
      var img_view = document.getElementById('img_views');
      var img_div = document.createElement("div");
      img_div.className = "img_view";
      var img_element = document.createElement('img');
      var img_url = String(this.response);
      console.log(img_element);
      var img_array = img_url.split('/');
      var img_id = img_array[4]; // 削除する際の判別idを指定

      img_element.setAttribute('id', img_id);
      img_element.className = "upload_imgs";
      img_element.src = this.response;
      img_div.appendChild(img_element);
      img_view.appendChild(img_div); // 作成したエレメントをホバーした時イベント発火

      img_element.addEventListener("mouseover", function () {
        // マウスオーバーした親要素に削除テキスト、透過css判定id付与
        this.parentNode.setAttribute("id", "del_img");
        var del_btn = document.createElement("h1");
        del_btn.setAttribute("id", "del_btn");
        del_btn.innerHTML = "×";
        this.parentNode.appendChild(del_btn);
      }); // マウスオーバーが外れた時のクラス、id削除

      img_element.addEventListener("mouseleave", function () {
        // del_imgの削除(透過css)
        document.getElementById("del_img").removeAttribute("id"); // del_btnの削除(削除テキスト)

        document.getElementById("del_btn").remove();
      }); // クリックした時の画像削除イベント発火

      img_element.addEventListener("click", function () {
        del_img(this);
      });
    }

    ;
  };
});

function del_img(request) {
  var xhr = json("/questionImgRemove");
  var form_data = new FormData();
  var image_url = request.getAttribute("src");
  var img_array = image_url.split('/');
  var img_data = img_array[4];
  form_data.append("image", img_data);
  xhr.send(form_data);

  xhr.onreadystatechange = function () {
    // xhrクライアントの状態がDONE=4　操作完了で発火
    if (this.readyState == 4 && this.status == 200) {}
  };
} // 画像削除
// img_viewの子要素に要素が追加されると発火
// const observer = new MutationObserver(function(){
//    console.log(click_img);
// });
// // 監視対象の選定
// const observer_config = {
//    cildList: true,
//    attributes: true,
//    characterData: true,
// };
// observer.observe(img_view, observer_config);
// for (let i = 1; i <= click_img.length; i++){
//    click_img[i].addEventListener("click", function(event) {
//       console.log(event.target.id);
//    });
// };

/***/ }),

/***/ 14:
/*!*********************************************************!*\
  !*** multi ./resources/js/Questions/question_editor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/cael/resources/js/Questions/question_editor.js */"./resources/js/Questions/question_editor.js");


/***/ })

/******/ });