/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/js/Memos/sectionAdd.js ***!
  \******************************************/
window.onload = function (event) {
  var editor = CKEDITOR.replace('editor', {
    uiColor: '#EEEEEE',
    height: 650
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
/******/ })()
;