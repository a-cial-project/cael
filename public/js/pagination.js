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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pagination.js":
/*!************************************!*\
  !*** ./resources/js/pagination.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// ページング機能
window.paginate = function (items) {
  var placement = document.getElementById('search_all');
  var pagenation = document.getElementById('pagenation');
  var currentPage = 1; // 現在のページ（何ページ目か）

  if (pagenation != null) {
    pagenation.remove();
  }

  var displayItems = 2; // 表示数

  var linkCount = Math.ceil(items.length / displayItems); // 端数の切り上げ

  var itemArray = [];
  var count = 0;

  for (var i = 1; i <= linkCount; i++) {
    for (var e = count; e < i * displayItems; e++) {
      itemArray.push(_defineProperty({}, i, items[count]));
      count++;
    }
  }

  display(currentPage, itemArray);
  var paginateZone = document.createElement('div');
  paginateZone.id = 'pagenation';
  paginateZone.className = 'row';
  placement.parentNode.insertBefore(paginateZone, placement.nextElementSibling);
  var prev = document.createElement('p');
  prev.innerHTML = '＜';
  prev.id = 'prev';
  prev.className = 'hidden';
  paginateZone.appendChild(prev);
  var next = document.createElement('p');
  next.innerHTML = '＞';
  next.id = 'next';

  if (currentPage != linkCount) {
    next.onclick = function () {
      this.classList.remove('hidden');
      this.setAttribute('data-page', Number(currentPage) + 1);
      initialize(currentPage, itemArray);
      currentPage = this.dataset.page;
      display(currentPage, itemArray);
      createPrev(currentPage, itemArray);

      if (currentPage == linkCount) {
        this.classList.add('hidden');
      }
    };
  }

  for (var _i = 1; _i <= linkCount; _i++) {
    var p = document.createElement('p');
    p.id = 'page' + [_i];
    p.innerHTML = [_i];
    p.dataset.page = [_i];
    paginateZone.appendChild(p);

    p.onclick = function () {
      if (currentPage != this.dataset.page) {
        initialize(currentPage, itemArray); // createNext(currentPage, itemArray);

        currentPage = this.dataset.page;
        display(currentPage, itemArray);
        createPrev(currentPage, itemArray);
        next.setAttribute('data-page', currentPage);

        if (currentPage == linkCount) {
          next.classList.add('hidden');
        } else if (currentPage != linkCount) {
          next.classList.remove('hidden');
        }
      } else {
        return;
      }
    };

    paginateZone.appendChild(next);
  }

  var createPrev = function createPrev(value, itemArray) {
    var prevLink = document.getElementById('prev');

    if (value != 1 || prevLink.classList.contains('hidden') == true) {
      prevLink.classList.remove('hidden');
      prevLink.setAttribute('data-page', [value - 1]);

      prevLink.onclick = function () {
        initialize(value, itemArray);
        currentPage = this.dataset.page;
        display(currentPage, itemArray);
        createPrev(currentPage, itemArray);
      };
    } else if (value == 1) {
      prevLink.classList.add('hidden');
    } else {
      return;
    }
  };
};

var initialize = function initialize(value, currentItems) {
  currentItems.forEach(function (item) {
    if (Object.keys(item) == value && typeof Object.values(item)[0] != 'undefined') {
      item[value].classList.add('hidden');
    }
  });
};

var display = function display(value, itemArray) {
  console.log(value, itemArray);
  var parentAll = document.getElementById('search_all');
  itemArray.forEach(function (item) {
    if (Object.keys(item) == value && typeof Object.values(item)[0] != 'undefined') {
      item[value].classList.remove('hidden');
    } else if (Object.keys(item) == value && typeof Object.values(item)[0] == 'undefined') {
      var searchUser = document.createElement('div');
      searchUser.className = 'user hidden mr-4 mb-4';
      parentAll.appendChild(searchUser);
    }
  });
};

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./resources/js/pagination.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/a-cial-project/cael/resources/js/pagination.js */"./resources/js/pagination.js");


/***/ })

/******/ });