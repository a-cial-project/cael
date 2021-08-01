/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/pagination.js ***!
  \************************************/
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
/******/ })()
;