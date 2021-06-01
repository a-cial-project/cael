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

/***/ "./resources/js/Memos/sectionEdit.js":
/*!*******************************************!*\
  !*** ./resources/js/Memos/sectionEdit.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var editContent = document.querySelectorAll('.content');

for (var i = 0; i < editContent.length; i++) {
  if (editContent[i].classList.contains('code') == true) {
    var stayValue = editContent[i].name;
    CKEDITOR.replace(editContent[i], {
      startupMode: 'source'
    });
    CKEDITOR.instances[stayValue].setData(editContent[i].value);
    addBtn(editContent[i]);
  } else if (editContent[i].classList.contains('blog') == true) {
    var _stayValue = editContent[i].name;
    CKEDITOR.replace(editContent[i], {
      startupMode: 'wysiwyg'
    });

    CKEDITOR.instances[_stayValue].setData(editContent[i].value);

    addBtn(editContent[i]);
  } else {
    addBtn(editContent[i].children[0].children[1]);
  }
}

var addSection = document.getElementById('addSectionBtn');
addSection.addEventListener('click', function () {
  var newSectionPlace = document.querySelectorAll('.sectionput');
  var newSectionTitle = document.createElement('input');
  var countSection = document.querySelectorAll('.sectiontitle');
  newSectionTitle.type = 'text';
  newSectionTitle.classList = 'row offset-4 col-4 mb-5 sectiontitle';
  addSection.parentNode.insertBefore(newSectionTitle, addSection);
  newSectionTitle.placeholder = 'セクションのタイトル';
  newSectionTitle.name = 'section_id[0]sectiontitle[]';
  var newSectionArea = document.createElement('div');
  newSectionArea.classList = 'sectionput';
  newSectionTitle.parentNode.insertBefore(newSectionArea, newSectionTitle.nextSibling);
  var newAddContentButtonArea = document.createElement('div');
  newAddContentButtonArea.classList = "row mb-5 add_btn";
  var newAddContentButton = document.createElement('button');
  newAddContentButton.type = 'button';
  newAddContentButton.classList = 'sectionBtn btn btn-primary col-2';
  newAddContentButton.innerText = "コンテンツを追加";
  newAddContentButtonArea.appendChild(newAddContentButton);
  newSectionArea.parentNode.insertBefore(newAddContentButtonArea, newSectionArea.nextSibling);
  var newContentAddBtnArea = document.createElement('div');
  newContentAddBtnArea.classList = 'fix hidden my-5 col-9 offset-2';
  newAddContentButtonArea.parentNode.insertBefore(newContentAddBtnArea, newAddContentButtonArea.nextSibling);
  var newAddCodeButton = document.createElement('button');
  newAddCodeButton.type = 'button';
  newAddCodeButton.classList = 'btn btn-primary col-3';
  newAddCodeButton.innerText = "コードを追加";
  newAddCodeButton.dataset.addelement = 'code';
  var newAddBlogButton = document.createElement('button');
  newAddBlogButton.type = 'button';
  newAddBlogButton.classList = 'btn btn-primary col-3';
  newAddBlogButton.innerText = "ブログを追加";
  newAddBlogButton.dataset.addelement = 'blog';
  var newAddImgButton = document.createElement('button');
  newAddImgButton.type = 'button';
  newAddImgButton.classList = 'btn btn-primary col-3';
  newAddImgButton.innerText = "画像を追加";
  newAddImgButton.dataset.addelement = 'image';
  newContentAddBtnArea.appendChild(newAddCodeButton);
  newContentAddBtnArea.appendChild(newAddBlogButton);
  newContentAddBtnArea.appendChild(newAddImgButton);
  var addLastSection = document.getElementsByClassName('sectionBtn');
  var fix = document.getElementsByClassName('fix');

  var _loop = function _loop(_i) {
    addLastSection[_i].addEventListener('click', function () {
      addLastSection[_i].classList.toggle('hidden');

      fix[_i].classList.toggle('hidden');

      for (var e = 0; e < fix[_i].children.length; e++) {
        fix[_i].children[e].onclick = function () {
          newContent(Number(newSectionPlace.length) + 1, newSectionArea.children.length + 1, this.dataset.addelement);

          addLastSection[_i].classList.toggle('hidden');

          fix[_i].classList.toggle('hidden');
        };
      }
    }, false);
  };

  for (var _i = 0; _i < addLastSection.length; _i++) {
    _loop(_i);
  }
});
var addLastSection = document.getElementsByClassName('sectionBtn');
var fix = document.getElementsByClassName('fix');

var _loop2 = function _loop2(_i2) {
  addLastSection[_i2].addEventListener('click', function () {
    addLastSection[_i2].classList.toggle('hidden');

    fix[_i2].classList.toggle('hidden');

    for (var e = 0; e < fix[_i2].children.length; e++) {
      fix[_i2].children[e].onclick = function () {
        var newAddContentPlace = document.querySelectorAll('.sectionput')[Number(this.dataset.sectioncount) - 1].querySelectorAll('.parentcontent');
        newContent(this.dataset.sectioncount, Number(newAddContentPlace.length) + 1, this.dataset.addelement);

        addLastSection[_i2].classList.toggle('hidden');

        fix[_i2].classList.toggle('hidden');
      };
    }
  }, false);
};

for (var _i2 = 0; _i2 < addLastSection.length; _i2++) {
  _loop2(_i2);
}

function addBtn(editContent) {
  var addArea = document.createElement('div');
  addArea.style.width = '100%';
  var addContentBtn = document.createElement('h1');
  addContentBtn.innerText = "＋";
  addContentBtn.style.textAlign = 'center';
  var deleteBtn = document.createElement('h1');
  deleteBtn.innerText = "×";
  deleteBtn.style.textAlign = 'left';
  var addBtnArea = document.createElement('div');
  addBtnArea.classList = 'row mb-5 btnarea hidden';
  addBtnArea.style.margin = '0 auto';
  var addCodeBtn = document.createElement('button');
  addCodeBtn.type = 'button';
  addCodeBtn.innerText = "コードを追加";
  addCodeBtn.classList = 'offset-3 btn btn-primary col-3';
  addCodeBtn.dataset.sectionPlace = editContent.dataset.sectioncount;
  addCodeBtn.dataset.contentPlace = editContent.dataset.contentcount;
  var addBlogBtn = document.createElement('button');
  addBlogBtn.type = 'button';
  addBlogBtn.innerText = "ブログを追加";
  addBlogBtn.classList = 'btn btn-primary col-3';
  addBlogBtn.dataset.sectionPlace = editContent.dataset.sectioncount;
  addBlogBtn.dataset.contentPlace = editContent.dataset.contentcount;
  var addImageBtn = document.createElement('button');
  addImageBtn.type = 'button';
  addImageBtn.innerText = "画像を追加";
  addImageBtn.classList = 'btn btn-primary col-3';
  addImageBtn.dataset.sectionPlace = editContent.dataset.sectioncount;
  addImageBtn.dataset.contentPlace = editContent.dataset.contentcount;
  var letMeThink = document.createElement('h1');
  letMeThink.innerText = "×";

  if (editContent.classList.contains('image') == true) {
    editContent.parentNode.parentNode.before(addContentBtn);
    editContent.parentNode.parentNode.after(deleteBtn);
    editContent.parentNode.parentNode.appendChild(addArea);
    editContent.parentNode.parentNode.before(addBtnArea);
  } else {
    editContent.parentNode.insertBefore(addContentBtn, editContent);
    addArea.appendChild(deleteBtn);
    editContent.parentNode.appendChild(addArea);
    editContent.parentNode.insertBefore(addBtnArea, editContent);
  }

  addBtnArea.appendChild(addCodeBtn);
  addBtnArea.appendChild(addBlogBtn);
  addBtnArea.appendChild(addImageBtn);
  addBtnArea.appendChild(letMeThink);

  addContentBtn.onclick = function () {
    addBtnArea.classList.toggle('hidden');
    addArea.classList.toggle('hidden');
  };

  addCodeBtn.onclick = function () {
    addBtnArea.classList.toggle('hidden');
    addArea.classList.toggle('hidden');
    addContent(this.dataset.sectionPlace, this.dataset.contentPlace, 'code');
  };

  addBlogBtn.onclick = function () {
    addBtnArea.classList.toggle('hidden');
    addArea.classList.toggle('hidden');
    addContent(this.dataset.sectionPlace, this.dataset.contentPlace, 'blog');
  };

  addImageBtn.onclick = function () {
    addBtnArea.classList.toggle('hidden');
    addArea.classList.toggle('hidden');
    addContent(this.dataset.sectionPlace, this.dataset.contentPlace, 'image');
  };

  letMeThink.onclick = function () {
    addBtnArea.classList.toggle('hidden');
    addArea.classList.toggle('hidden');
  };

  deleteBtn.onclick = function () {
    deleteContent(editContent);
  };
}

;

function h(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&#039;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/\n/g, '<br>');
  str = str.replace(/ /g, '&nbsp;');
  return str;
}

function newContent(sectionPlace, contentPlace, addElement) {
  var addLocation = document.querySelectorAll('.sectionput')[sectionPlace - 1];
  var parentcontent = document.createElement('div');
  parentcontent.classList = 'parentcontent mb-5';
  addLocation.appendChild(parentcontent);

  if (addElement == 'code') {
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content code';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][' + '][section_code]');
    CKEDITOR.replace(newContent, {
      startupMode: 'source'
    });
    parentcontent.appendChild(newContent);
  } else if (addElement == 'blog') {
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content blog';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][' + '][section_content]');
    CKEDITOR.replace(newContent, {
      startupMode: 'wysiwyg'
    });
    parentcontent.appendChild(newContent);
  } else if (addElement == 'image') {
    var fileParent = document.createElement('div');
    fileParent.classList = 'content image-parent';
    var newContent = document.createElement('input');
    newContent.type = 'file';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][' + '][section_image]');
    newContent.classList = 'row col-12 image';
    var imageLabel = document.createElement('label');
    imageLabel.classList = 'input-label';
    var labelP = document.createElement('p');
    labelP.innerHTML = '画像を選択してください';
    imageLabel.appendChild(labelP);
    imageLabel.appendChild(newContent);
    fileParent.appendChild(imageLabel);
    parentcontent.appendChild(fileParent);
    imageLabel.addEventListener('change', function (e) {
      fileReader(this);
    }, false);
  }

  newContent.setAttribute("data-sectioncount", sectionPlace);
  newContent.setAttribute("data-contentcount", contentPlace);
  addBtn(newContent);
}

function addContent(sectionPlace, contentPlace, addElement) {
  var sectionput = document.querySelectorAll('.sectionput')[sectionPlace - 1].querySelectorAll('.content');
  var addLocation = sectionput[Number(contentPlace) - 1].parentNode;

  for (var _i3 = Number(sectionput.length) - 1; _i3 >= Number(contentPlace) - 1; _i3--) {
    if (sectionput[_i3].classList.contains('code') == true) {
      var ckValue = CKEDITOR.instances[sectionput[_i3].name].getData();

      CKEDITOR.instances[sectionput[_i3].name].destroy();

      sectionput[_i3].setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [_i3 + 2] + ']' + '[section_id][' + [sectionput[_i3].dataset.id] + '][section_code]');

      sectionput[_i3].setAttribute("data-contentcount", _i3 + 2);

      CKEDITOR.replace(sectionput[_i3], {
        startupMode: 'source'
      });

      CKEDITOR.instances[sectionput[_i3].name].setData(ckValue);

      var _addBtn = sectionput[_i3].previousElementSibling;

      _addBtn.children[0].setAttribute("data-content-place", _i3 + 2);

      _addBtn.children[1].setAttribute("data-content-place", _i3 + 2);

      _addBtn.children[2].setAttribute("data-content-place", _i3 + 2);
    } else if (sectionput[_i3].classList.contains('blog') == true) {
      var _ckValue = CKEDITOR.instances[sectionput[_i3].name].getData();

      CKEDITOR.instances[sectionput[_i3].name].destroy();

      sectionput[_i3].setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [_i3 + 2] + ']' + '[section_id][' + [sectionput[_i3].dataset.id] + '][section_content]');

      sectionput[_i3].setAttribute("data-contentcount", _i3 + 2);

      CKEDITOR.replace(sectionput[_i3], {
        startupMode: 'wysiwyg'
      });

      CKEDITOR.instances[sectionput[_i3].name].setData(_ckValue);

      var _addBtn2 = sectionput[_i3].previousElementSibling;

      _addBtn2.children[0].setAttribute("data-content-place", _i3 + 2);

      _addBtn2.children[1].setAttribute("data-content-place", _i3 + 2);

      _addBtn2.children[2].setAttribute("data-content-place", _i3 + 2);
    } else {
      sectionput[_i3].children[0].children[1].setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [_i3 + 2] + ']' + '[section_id][' + [sectionput[_i3].dataset.id] + '][section_image]');

      sectionput[_i3].children[0].children[1].setAttribute("data-contentcount", _i3 + 2);

      var _addBtn3 = sectionput[_i3].previousElementSibling;

      _addBtn3.children[0].setAttribute("data-content-place", _i3 + 2);

      _addBtn3.children[1].setAttribute("data-content-place", _i3 + 2);

      _addBtn3.children[2].setAttribute("data-content-place", _i3 + 2);
    }
  }

  var sectionArray = Array.from(sectionput);
  var parentcontent = document.createElement('div');
  parentcontent.classList = 'parentcontent mb-5';
  addLocation.parentNode.insertBefore(parentcontent, addLocation);

  if (addElement == 'code') {
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content code';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][]' + '[section_code]');
    sectionArray.splice(Number(contentPlace) - 1, 0, newContent);
    CKEDITOR.replace(newContent, {
      startupMode: 'source'
    });
    parentcontent.appendChild(newContent);
  } else if (addElement == 'blog') {
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content blog';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][]' + '[section_content]');
    sectionArray.splice(Number(contentPlace) - 1, 0, newContent);
    CKEDITOR.replace(newContent, {
      startupMode: 'wysiwyg'
    });
    parentcontent.appendChild(newContent);
  } else {
    var fileParent = document.createElement('div');
    fileParent.classList = 'content image-parent';
    parentcontent.appendChild(fileParent);
    var newContent = document.createElement('input');
    newContent.type = 'file';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][]' + '[section_image]');
    newContent.classList = 'row col-12 image';
    newContent.setAttribute('id', '01');
    sectionArray.splice(Number(contentPlace) - 1, 0, newContent);
    var imageLabel = document.createElement('label');
    imageLabel.classList = 'input-label';
    var labelP = document.createElement('p');
    labelP.innerHTML = '画像を選択してください';
    imageLabel.appendChild(labelP);
    imageLabel.appendChild(newContent);
    fileParent.appendChild(imageLabel);
    parentcontent.appendChild(fileParent);
    imageLabel.addEventListener('change', function (e) {
      fileReader(this);
    }, false);
  }

  newContent.setAttribute("data-sectioncount", sectionPlace);
  newContent.setAttribute("data-contentcount", contentPlace);
  addBtn(newContent);
}

var alreadyImage = document.getElementsByClassName('input-label');
var inputImg = document.getElementsByClassName('image');

for (var _i4 = 0; _i4 < alreadyImage.length; _i4++) {
  alreadyImage[_i4].addEventListener('change', function (e) {
    fileReader(this);
  }, false);
}

function fileReader(addImage) {
  var fileFlag = addImage.nextElementSibling;

  if (fileFlag.className == 'confirmImage') {
    fileFlag.remove();
  }

  var image = new Image();
  image.className = 'confirmImage';
  var confirmImage = document.getElementsByName(addImage.children[1].name)[0].files[0];
  var reader = new FileReader();

  reader.onload = function () {
    image.src = reader.result;
  };

  reader.readAsDataURL(confirmImage);
  addImage.children[0].textContent = confirmImage.name;
  addImage.after(image);
}

function deleteContent(editContent) {
  var sectioncount = editContent.dataset.sectioncount;
  var contentcount = Number(editContent.dataset.contentcount);
  var sectionput = document.querySelectorAll('.sectionput')[sectioncount - 1].querySelectorAll('.content');

  if (editContent.dataset.id != undefined) {
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    var token = document.getElementById('csrf_token').getAttribute('content');
    xhr.open('post', '/deletecontent');
    xhr.setRequestHeader('X-CSRF-Token', token);
    fd.append('content', editContent.dataset.id);
    xhr.send(fd);
  }

  if (editContent.classList.contains('image') == true) {
    var parentEditContent = editContent.parentNode.parentNode.parentNode;
    parentEditContent.remove();
  } else {
    var _parentEditContent = editContent.parentNode;

    _parentEditContent.remove();
  }

  for (var _i5 = contentcount; _i5 < sectionput.length; _i5++) {
    if (sectionput[_i5].classList.contains('code') == true) {
      var ckValue = CKEDITOR.instances[sectionput[_i5].name].getData();

      CKEDITOR.instances[sectionput[_i5].name].destroy();

      sectionput[_i5].setAttribute("name", 'section' + '[' + [sectioncount] + ']' + '[' + [_i5] + ']' + '[section_id][' + [sectionput[_i5].dataset.id] + '][section_code]');

      sectionput[_i5].setAttribute("data-contentcount", _i5);

      CKEDITOR.replace(sectionput[_i5], {
        startupMode: 'source'
      });
    } else if (sectionput[_i5].classList.contains('blog') == true) {
      var _ckValue2 = CKEDITOR.instances[sectionput[_i5].name].getData();

      CKEDITOR.instances[sectionput[_i5].name].destroy();

      sectionput[_i5].setAttribute("name", 'section' + '[' + [sectioncount] + ']' + '[' + [_i5] + ']' + '[section_id][' + [sectionput[_i5].dataset.id] + '][section_content]');

      sectionput[_i5].setAttribute("data-contentcount", _i5);

      CKEDITOR.replace(sectionput[_i5], {
        startupMode: 'wysiwyg'
      });
    } else if (sectionput[_i5].classList.contains('image-parent') == true) {
      var stayImage = sectionput[_i5].children[0].children[1];
      stayImage.setAttribute("name", 'section' + '[' + [sectioncount] + ']' + '[' + [_i5] + ']' + '[section_id][' + [sectionput[_i5].dataset.id] + '][section_image]');
      stayImage.setAttribute("data-contentcount", _i5);
    }

    var _addBtn4 = sectionput[_i5].previousElementSibling;

    _addBtn4.children[0].setAttribute("data-content-place", _i5);

    _addBtn4.children[1].setAttribute("data-content-place", _i5);

    _addBtn4.children[2].setAttribute("data-content-place", _i5);
  }
}

var confirmBtn = document.getElementById('confirmBtn');
var contentArea = document.getElementsByClassName('input')[0];
var returnBtnArea = document.getElementsByClassName('confirm')[0];
confirmBtn.addEventListener('click', function (e) {
  var result = validation();

  if (result == 0) {
    contentArea.classList.toggle('hidden');
    returnBtnArea.classList.toggle('hidden');
    var confirmArea = document.createElement('div');
    confirmArea.classList = 'confirmarea';
    contentArea.after(confirmArea);
    var sectionput = document.getElementsByClassName('sectionput');
    var contentTitle = document.getElementsByClassName('sectiontitle');

    for (var _i6 = 0; _i6 < sectionput.length; _i6++) {
      var confirmTitle = document.createElement('h4');
      confirmTitle.innerHTML = contentTitle[_i6].value;
      confirmArea.appendChild(confirmTitle);

      var contentValue = sectionput[_i6].getElementsByClassName('content');

      for (var a = 0; a < contentValue.length; a++) {
        if (contentValue[a].classList.contains('code') == true) {
          var confirmCode = document.createElement('pre');
          confirmCode.className = 'prettyprint linenums';
          var confirmCkEditorValue = h(CKEDITOR.instances[contentValue[a].name].getData());
          confirmCode.innerHTML = confirmCkEditorValue;
          confirmArea.appendChild(confirmCode);
          prettyPrint();
        } else if (contentValue[a].classList.contains('blog') == true) {
          var confirmContent = document.createElement('div');
          confirmContent.className = 'confirmContent';
          confirmContent.innerHTML = CKEDITOR.instances[contentValue[a].name].getData();
          confirmArea.appendChild(confirmContent);
        } else if (contentValue[a].classList.contains('image-parent') == true) {
          var image = new Image();
          image.className = 'confirmImage'; // if(contentValue[a].children[0].children[1].value != ''){
          //   const confirmImage = document.getElementsByName(contentValue[a].children[0].children[1].name)[0].files[0];
          //   const reader = new FileReader();
          //   reader.onload = () => {
          //     image.src = reader.result;
          //   }
          //   reader.readAsDataURL(confirmImage);
          // }else{

          image.src = contentValue[a].children[1].src; // }

          confirmArea.appendChild(image);
        }
      }
    }
  }
});
returnBtn.addEventListener('click', function (e) {
  document.getElementsByClassName('confirmarea')[0].remove();
  contentArea.classList.toggle('hidden');
  returnBtnArea.classList.toggle('hidden');
});

function validation() {
  var existingError = document.getElementsByClassName('error');

  while (existingError.length) {
    existingError.item(0).remove();
  }

  var checkValue = document.getElementsByClassName('content');
  var errCount = 0;

  for (var _i7 = 0; _i7 < checkValue.length; _i7++) {
    if (checkValue[_i7].classList.contains('code') == true) {
      var checkCkValue = CKEDITOR.instances[checkValue[_i7].name].getData();

      if (checkCkValue.length <= 0) {
        var errArray = document.createElement('h4');
        errArray.innerHTML = 'コードが入っていません。↓';
        errArray.className = 'error';

        checkValue[_i7].before(errArray);

        errCount++;
      }
    } else if (checkValue[_i7].classList.contains('blog') == true) {
      var _checkCkValue = CKEDITOR.instances[checkValue[_i7].name].getData();

      if (_checkCkValue.length < 61) {
        var _errArray = document.createElement('h4');

        _errArray.innerHTML = '内容が入っていません。↓';
        _errArray.className = 'error';

        checkValue[_i7].before(_errArray);

        errCount++;
      }
    } else if (checkValue[_i7].classList.contains('image-parent') == true) {
      var checkImageValue = checkValue[_i7].getElementsByClassName('confirmImage');

      if (checkImageValue.length != 1) {
        var _errArray2 = document.createElement('h4');

        _errArray2.innerHTML = '画像が入っていません。↓';
        _errArray2.className = 'error';

        checkValue[_i7].before(_errArray2);

        errCount++;
      }
    }
  }

  return errCount;
}

;

/***/ }),

/***/ 9:
/*!*************************************************!*\
  !*** multi ./resources/js/Memos/sectionEdit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vagrant/code/cael/resources/js/Memos/sectionEdit.js */"./resources/js/Memos/sectionEdit.js");


/***/ })

/******/ });