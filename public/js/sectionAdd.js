<<<<<<< HEAD
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/js/Memos/sectionAdd.js ***!
  \******************************************/
window.addEventListener('DOMContentLoaded', function () {
  var addSection = document.getElementById('sectionBtn');
  var addContent = document.getElementsByClassName('fix')[0];
  var addCode = document.getElementById('code');
  var addBlog = document.getElementById('content');
  var addImage = document.getElementById('image');
  addSection.addEventListener('click', function (e) {
    addContent.classList.remove('hidden');
  }); // 追加場所を記録するため０を設定

  var count = 0; // セクションを作る

  addSection.addEventListener('click', function (e) {
    count = 0;
    var sectionArea = document.createElement('div');
    sectionArea.className = 'section_area';
    var parent = document.getElementsByClassName('section_create_form')[0];
    sectionArea = parent.appendChild(sectionArea);
    var sectionTitle = document.createElement('input');
    sectionTitle.type = 'text';
    sectionTitle.className = 'offset-4 col-4 mb-5';
    sectionTitle.name = 'section_title[]';
    sectionTitle.placeholder = 'セクションのタイトル';
    sectionArea.appendChild(sectionTitle);
  }); // セクションごとのソースコードを作る

  addCode.addEventListener('click', function (e) {
    count++;
    var section_place = document.getElementsByClassName('section_area').length - 1;
    var codeParent = document.getElementsByClassName('section_area')[section_place];
    var inputCode = document.createElement('textarea');
    inputCode.className = 'col-12 mb-5 code arr';
    inputCode.name = 'section' + '[' + [section_place] + ']' + '[' + [count] + ']' + '[section_code]';
    inputCode.placeholder = 'コードを書いてください';
    codeParent.appendChild(inputCode);
    CKEDITOR.replace(inputCode, {
      startupMode: 'source'
    }); // コンテンツごとの間に追加するためのボタン

    var addContent = document.createElement('h2');
    addContent.innerHTML = '＋';
    addContent.className = 'addContent';
    addContent.dataset.count = [count];
    addContent.dataset.kind = "section_code";
    addContent.dataset.place = [section_place];
    codeParent.appendChild(addContent);
    lastcontent();

    addContent.onclick = function () {
      addContent.classList.toggle('hidden');
      judgeContent(inputCode, addContent.dataset.count, section_place, addContent);
      count++;
    }; // 削除ボタン生成


    var deleteContent = document.createElement('h2');
    deleteContent.innerHTML = '×';
    deleteContent.className = 'deleteContent';
    deleteContent.dataset.count = [count];
    deleteContent.dataset.kind = "section_code";
    deleteContent.dataset.place = [section_place];
    codeParent.appendChild(deleteContent);

    deleteContent.onclick = function () {
      deletecontent(deleteContent);
      count--;
    };
=======
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Memos/sectionAdd.js":
/*!******************************************!*\
  !*** ./resources/js/Memos/sectionAdd.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function (event) {
  var editor = CKEDITOR.replace('editor', {
    uiColor: '#EEEEEE',
    height: 650
>>>>>>> develop
  });
  editor.on("instanceReady", function () {
    var ck = CKEDITOR.instances["ckeditor"];
    ck.document.on("keyup", function () {
      var words = CKEDITOR.instances.ckeditor.getData(); //ckeditorの中の文字列をとってきてくれる
      // プレビューを映し出す処理

      var preview = document.getElementById('realtimepreview');
      console.log(words);
      preview.innerHTML = words;
      prettyPrint();
    });
  });
};

var input = document.getElementsByClassName('input')[0];
var confirm = document.getElementById('confirm');
var confirmBtn = document.getElementById('posting');
confirmBtn.addEventListener('click', function (e) {
  var err = document.getElementsByClassName('errMsg');

  while (err.length) {
    err.item(0).remove();
  }

  var memo_name = document.getElementById('memo_name').value;
  var category_id = document.getElementById('category_id');
  var status_id = document.getElementById('status');
  var confirmEditor = CKEDITOR.instances.ckeditor.getData();
  var errCount = validation();

  if (errCount == 0) {
    input.classList.toggle('hidden');
    confirm.classList.toggle('hidden');
    var confirmPreview = document.createElement('div');
    confirmPreview.className = "confirmPreview";
    confirm.appendChild(confirmPreview);
    var title = document.createElement('div');
    title.className = 'title';
    var titleValue = document.createElement('h1');
    titleValue.innerHTML = 'タイトル：' + memo_name;
    title.appendChild(titleValue);
    confirmPreview.appendChild(title);
    var category = document.createElement('div');
    category.className = 'category';
    var categoryValue = document.createElement('h4');

    if (category_id.value == 0) {
      categoryValue.innerHTML = 'カテゴリー：' + document.getElementById('new_category').value;
    } else {
      categoryValue.innerHTML = 'カテゴリー：' + category_id[category_id.selectedIndex].text;
    }

    category.appendChild(categoryValue);
    confirmPreview.appendChild(category);
    var status = document.createElement('div');
    status.className = 'status';
    var statusValue = document.createElement('h4');

    if (status_id.value == "privacy") {
      statusValue.innerHTML = '状態：非公開';
    } else {
      statusValue.innerHTML = '状態：公開';
    }

    status.appendChild(statusValue);
    confirmPreview.appendChild(status);
    var editor = document.createElement('div');
    editor.className = 'editor';
    editor.innerHTML = confirmEditor;
    confirmPreview.appendChild(editor);
    prettyPrint(confirmEditor);
  }
});
var returnBtn = document.getElementById('returnBtn');
returnBtn.addEventListener('click', function (e) {
  var confirmPreview = document.getElementsByClassName('confirmPreview')[0];
  confirmPreview.remove();
  input.classList.toggle('hidden');
  confirm.classList.toggle('hidden');
});

function validation() {
  var errCount = 0;

  if (memo_name.length <= 1) {
    var errMsg = document.createElement('h3');
    errMsg.className = 'errMsg';
    errMsg.innerHTML = '↓タイトルが設定されていません。';
    memo_name.before(errMsg);
    errCount++;
  }

  if (category_id.value == '0') {
    if (document.getElementById('new_category').value.length <= 0) {
      var _errMsg = document.createElement('h3');

      _errMsg.className = 'errMsg';
      _errMsg.innerHTML = '↓カテゴリー名が設定されていません。';
      document.getElementById('new_category').before(_errMsg);
      errCount++;
    }
  }

  if (CKEDITOR.instances.ckeditor.getData().length <= 61) {
    var _errMsg2 = document.createElement('h3');

    _errMsg2.className = 'errMsg';
    _errMsg2.innerHTML = '↓内容が設定されていません。';
    var parentCk = document.getElementsByClassName('section_create_form')[0];
    parentCk.before(_errMsg2);
    errCount++;
  }

  return errCount;
}

<<<<<<< HEAD
;
/******/ })()
;
=======
/***/ }),

/***/ 9:
/*!************************************************!*\
  !*** multi ./resources/js/Memos/sectionAdd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/a-cial-project/cael/resources/js/Memos/sectionAdd.js */"./resources/js/Memos/sectionAdd.js");


/***/ })

/******/ });
>>>>>>> develop
