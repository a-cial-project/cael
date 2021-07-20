/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/category.js ***!
  \**********************************/
var category_id = document.getElementById('category_id');
var categoryChange = category_id.children;

if (document.getElementById('hide') != undefined) {
  var value = document.getElementById('hide').textContent;

  for (var i = 0; i < categoryChange.length; i++) {
    if (categoryChange[i].value == value) {
      categoryChange[i].selected = true;
      document.getElementById("category").style.display = "none";
    }
  }

  ;
}

category_id.onchange = function () {
  if (category_id.value == 0) {
    document.getElementById("category").style.display = "block";
  } else if (category_id.value != 0) {
    document.getElementById("category").style.display = "none";
  }
};
/******/ })()
;