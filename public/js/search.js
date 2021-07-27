/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/search.js ***!
  \********************************/
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
<<<<<<< HEAD
/******/ })()
;
=======

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./resources/js/search.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/a-cial-project/cael/resources/js/search.js */"./resources/js/search.js");


/***/ })

/******/ });
>>>>>>> develop
