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

window.onload = function () {
  // ckeditorの実装
  var ckeditor = CKEDITOR.replace("editor", {
    uiColor: "#EEEEEE",
    height: 600
  }); // 実装準備完了時の関数読み込み

  ckeditor.on("instanceReady", function (e) {
    // ckeditorのインスタンス化
    var editor_instance = CKEDITOR.instances.editor; // 初期値設定

    editor_instance.setData("<h3>[質問内容]:</h3><strong><br>[発生している問題]:</strong><p></p><br><br><strong>[試したこと]:</strong><p></p><br><br><strong>[備考欄（バージョン指定やその他知りたいこと)]:</strong><p></p>"); // リアルタイム表示関数読み込み

    editor_instance.document.on("keyup", function () {
      // オブジェクトデータ取得
      var data = editor_instance.getData(); // 指定elementIdに表示

      document.getElementById("preview").innerHTML = data;
    });
  });
}; // 画像プレビュー表示 画像選択時にonchange起動で呼び出し


var setImage = document.getElementById('file_upload');
setImage.addEventListener('change', function (e) {
  for (i = 0; i < e.files.length; i++) {
    // FileReaderのインスタンス化
    var reader = new FileReader(); // readerのロード完了時のイベント

    reader.onload = function (e) {
      // e.srcElement.resultで画像データオブジェクト取得
      document.getElementById("file_preview").innerHTML += '<img src="' + e.srcElement.result + '">';
    }; // src属性として出力するためDataURLで実行


    reader.readAsDataURL(e.files[i]);
  }

  ;
}); // function setImage(e){
//   // 引数のオブジェクトの数ループ処理で複数画像取得
//  for (i = 0; i<e.files.length; i++){
//   // FileReaderのインスタンス化
//    const reader = new FileReader();
//   // readerのロード完了時のイベント
//    reader.onload = (e) => {
//   // e.srcElement.resultで画像データオブジェクト取得
//      document.getElementById("file_preview").innerHTML += '<img src="'+ e.srcElement.result + '">';
//    };
//   // src属性として出力するためDataURLで実行
//    reader.readAsDataURL(e.files[i]);
//  };
// };

/***/ }),

/***/ 14:
/*!*********************************************************!*\
  !*** multi ./resources/js/Questions/question_editor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/a-cial-project/cael/resources/js/Questions/question_editor.js */"./resources/js/Questions/question_editor.js");


/***/ })

/******/ });