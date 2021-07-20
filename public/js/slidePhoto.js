/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./resources/js/Interviews/slidePhoto.js ***!
  \***********************************************/
addEventListener('load', function () {
  viewSlide('.slide img');
});

function viewSlide(className) {
  var slideNo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var imgArray = document.querySelectorAll(className);

  if (slideNo >= 0) {
    //初回以外は現在のスライドを消す
    imgArray[slideNo].style.opacity = 0;
  }

  slideNo++;

  if (slideNo >= imgArray.length) {
    slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
  }

  imgArray[slideNo].style.opacity = 1;
  setTimeout(function () {
    viewSlide(className, slideNo);
  }, 5000);
}
/******/ })()
;