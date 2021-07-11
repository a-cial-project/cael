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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/Memos/s3_upload.js":
/*!*****************************************!*\
  !*** ./resources/js/Memos/s3_upload.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var input = document.getElementById('image_input');
input.addEventListener('change', function (e) {
  fileReader(this.files[0]);
}, false);

function fileReader(addImage) {
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content');
  xhr.open('post', '/imageupload');
  xhr.setRequestHeader('X-CSRF-Token', token);
  fd.append('image', addImage);
  xhr.send(fd);
  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var image_zone = document.getElementById('image_zone');
      var imgDiv = document.createElement('div');
      imgDiv.className = 'img_parent';
      var deleteBtn = document.createElement('div');
      deleteBtn.className = 'deleteBtn';
      deleteBtn.innerHTML = '×';
      var image = new Image();
      image.className = 'image';
      image.src = xhr.response;
      var input_file = document.createElement('input');
      input_file.type = 'text';
      input_file.display = 'none';
      input_file.setAttribute("name", "path[]");
      input_file.value = xhr.response;
      image.appendChild(input_file);
      image_zone.appendChild(imgDiv);
      imgDiv.appendChild(deleteBtn);
      imgDiv.appendChild(image); // 画像の削除処理

      deleteBtn.onclick = function () {
        console.log(this);
        deleteImg(this);
      };
    }
  });
}

var alreadyImg = document.getElementsByClassName('deleteBtn');

for (var i = 0; i < alreadyImg.length; i++) {
  alreadyImg[i].addEventListener('click', function (e) {
    deleteImg(this);
  }, false);
}

function deleteImg(deleteImage) {
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content');
  var deleteImg = deleteImage.nextElementSibling.getAttribute('src');
  xhr.open('post', '/imagedelete');
  xhr.setRequestHeader('X-CSRF-Token', token);
  fd.append('img', deleteImg);
  xhr.send(fd);
  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      deleteImage.parentNode.remove();
    }
  });
}

var submitBtn = document.getElementById('submitBtn');
var is_note_msg = true;
submitBtn.addEventListener('click', function (event) {
  is_note_msg = false;
});
window.addEventListener('beforeunload', function (event) {
  if (is_note_msg) {
    // Cancel the event as stated by the standard.
    event.preventDefault(); // Chrome requires returnValue to be set.

    event.returnValue = 'aaa'; // setTimeout(() => {
    // 	flag = true;
    // 	setTimeout(() => {
    // 		flag = false;
    // 		console.log(flag);
    // 		return flag;
    // 	}, 1000);
    // },1);
    // console.log(flag);
  }
});
window.addEventListener('unload', function (event) {
  if (is_note_msg) {
    // ロードした時はS3に保存された画像を削除する処理をする
    for (var _i = 0; _i < alreadyImg.length; _i++) {
      deleteImg(alreadyImg[_i]);
    }
  }
});

/***/ }),

/***/ 11:
/*!***********************************************!*\
  !*** multi ./resources/js/Memos/s3_upload.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/a-cial-project/cael/resources/js/Memos/s3_upload.js */"./resources/js/Memos/s3_upload.js");


/***/ })

/******/ });