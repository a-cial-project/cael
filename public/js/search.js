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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/search.js":
/*!********************************!*\
  !*** ./resources/js/search.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
  var searchBtn = document.getElementById("search-icon");
  var search_all = document.getElementById('search_all');
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  var token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  searchBtn.addEventListener('click', function (e) {
    var countAlreadyResult = search_all.childElementCount;

    if (countAlreadyResult != 0) {
      document.getElementsByClassName("alreadyResult")[0].remove();
    }

    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    var searchValue = document.getElementById("search_value").value;
    var params = document.getElementById("params").value;
    xhr.open('post', params);
    xhr.setRequestHeader('X-CSRF-Token', token);
    fd.append('value', searchValue);
    xhr.send(fd);
  }); // (7) 通信完了したらレスポンスからJSONデータを取得してコンソール出力

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var results = JSON.parse(xhr.response);
      console.log(results);
      var resultCount = results[0].length;
      var url = location.href;
      var searchResultsBox = document.createElement('div');
      searchResultsBox.className = 'row mx-3 mb-5 alreadyResult';
      search_all.appendChild(searchResultsBox);

      if (resultCount > 0) {
        for (var i = 0; i < resultCount; i++) {
          var searchResult = document.createElement('div');
          searchResult.className = 'result hidden mr-4 mb-4';
          searchResultsBox.appendChild(searchResult);
          var linkValue = document.createElement('a');
          linkValue.href = url + results[1] + '/' + results[0][i]['id'];
          linkValue.innerHTML = results[0][i]['name'];
          searchResult.appendChild(linkValue);

          if (results[1] != 'user') {
            var iconParent = document.createElement('div');
            iconParent.className = 'favorite';
            iconParent.dataset.id = results[0][i]['id'];
            iconParent.dataset.order = [i];
            searchResult.appendChild(iconParent);
            var icon = document.createElement('i');

            if (results[0][i]['result'] != null) {
              icon.className = 'fas' + ' ' + results[2] + ' ' + 'like';
            } else {
              icon.className = 'fas' + ' ' + results[2] + ' ' + 'unlike';
            }

            iconParent.appendChild(icon);
            var p = document.createElement('p');
            p.innerHTML = results[0][i]['count'];
            iconParent.appendChild(p);
          }
        }

        var createValues = document.getElementsByClassName("result");
        paginate(createValues);
        clickFavorite(results[3]);
      } else if (resultCount == 0) {
        var notResult = document.createElement('h3');
        notResult.innerHTML = 'そのようなユーザーは見つかりませんでした。';
        search_all.appendChild(notResult);
      }
    }
  });
});

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./resources/js/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/cael/resources/js/search.js */"./resources/js/search.js");


/***/ })

/******/ });