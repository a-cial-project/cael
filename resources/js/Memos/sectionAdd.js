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
    inputCode.name = 'section' + '[' + [section_place] + ']' + '[' + [count] + ']' + '[section_code][]';
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
  });
  addBlog.addEventListener('click', function (e) {
    count++;
    var section_place = document.getElementsByClassName('section_area').length - 1;
    var codeParent = document.getElementsByClassName('section_area')[section_place];
    var inputBlog = document.createElement('textarea');
    inputBlog.className = 'col-12 mb-5 content arr';
    inputBlog.name = 'section' + '[' + [section_place] + ']' + '[' + [count] + ']' + '[section_content][]';
    inputBlog.placeholder = '文を書いてください';
    codeParent.appendChild(inputBlog);
    CKEDITOR.replace(inputBlog, {
      startupMode: 'wysiwyg'
    });
    var addContent = document.createElement('h2');
    addContent.innerHTML = '＋';
    addContent.className = 'addContent';
    addContent.dataset.count = [count];
    addContent.dataset.kind = "section_content";
    addContent.dataset.place = [section_place];
    codeParent.appendChild(addContent);
    lastcontent();

    addContent.onclick = function () {
      addContent.classList.toggle('hidden');
      judgeContent(inputBlog, addContent.dataset.count, section_place, addContent);
      count++;
    };

    var deleteContent = document.createElement('h2');
    deleteContent.innerHTML = '×';
    deleteContent.className = 'deleteContent';
    deleteContent.dataset.count = [count];
    deleteContent.dataset.kind = "section_content";
    deleteContent.dataset.place = [section_place];
    codeParent.appendChild(deleteContent);

    deleteContent.onclick = function () {
      deletecontent(deleteContent);
      count--;
    };
  });
  addImage.addEventListener('click', function (e) {
    count++;
    var section_place = document.getElementsByClassName('section_area').length - 1;
    var codeParent = document.getElementsByClassName('section_area')[section_place];
    var inputImage = document.createElement('input');
    inputImage.type = 'file';
    inputImage.className = 'col-12 mb-5 image arr';
    inputImage.name = 'section' + '[' + [section_place] + ']' + '[' + [count] + ']' + '[section_image][]';
    inputImage.placeholder = '文を書いてください';
    codeParent.appendChild(inputImage);

    inputImage.onchange = function () {
      var file = inputImage.files[0];
      var fileFlag = inputImage.nextElementSibling;
      console.log(fileFlag.className);

      if (fileFlag.className == 'sectionimage') {
        inputImage.nextSibling.remove();
      }

      var reader = new FileReader();
      console.log(file);

      reader.onload = function (event) {
        console.log(event);
        var img = document.createElement("img");
        img.className = 'sectionimage';
        img.setAttribute("src", reader.result);
        codeParent.insertBefore(img, inputImage.nextSibling);
        console.log(img);
      };

      reader.readAsDataURL(file);
    };

    var addContent = document.createElement('h2');
    addContent.innerHTML = '＋';
    addContent.className = 'addContent';
    addContent.dataset.count = [count];
    addContent.dataset.kind = "section_image";
    addContent.dataset.place = [section_place];
    codeParent.appendChild(addContent);
    lastcontent();

    addContent.onclick = function () {
      addContent.classList.toggle('hidden');
      judgeContent(inputImage, addContent.dataset.count, section_place, addContent);
      count++;
    };

    var deleteContent = document.createElement('h2');
    deleteContent.innerHTML = '×';
    deleteContent.className = 'deleteContent';
    deleteContent.dataset.count = [count];
    deleteContent.dataset.kind = "section_image";
    deleteContent.dataset.place = [section_place];
    codeParent.appendChild(deleteContent);

    deleteContent.onclick = function () {
      deletecontent(deleteContent);
      count--;
    };
  });
  var confirmBtn = document.getElementById('confirmBtn');
  var returnBtn = document.getElementById('returnBtn');
  var confirm = document.getElementsByClassName('confirm')[0];
  var input = document.getElementsByClassName('input')[0];
  var postingarea = document.getElementsByClassName('posting')[0];
  var submitarea = document.getElementsByClassName('submitarea')[0];
  var add_btn = document.getElementsByClassName('add_btn')[0];
  confirmBtn.addEventListener('click', function (e) {
    var result = validation();
    console.log(result);

    if (result == 0) {
      var confirmParent = document.createElement('div');
      confirmParent.className = 'confirmParent';
      confirm.appendChild(confirmParent);
      var sectionPlace = document.getElementsByClassName('section_area');
      var sectionNumber = sectionPlace.length - 1;

      for (var i = 0; i <= sectionNumber; i++) {
        var sectionArr = sectionPlace[i].getElementsByClassName('arr');
        var contentArr = sectionPlace[i].getElementsByClassName('content');
        var sectionPosition = sectionArr.length;
        var confirmSection = document.createElement('div');
        confirmSection.className = 'confirmSection';
        confirmParent.appendChild(confirmSection);
        var sectionTitle = document.getElementsByName('section_title[]');
        var sectionTitleArea = document.createElement('h2');
        console.log(i);
        console.log(sectionTitle[i]);
        sectionTitleArea.innerHTML = sectionTitle[i].value;
        confirmSection.appendChild(sectionTitleArea);

        for (var a = 1; a <= sectionPosition; a++) {
          var sectionName = sectionArr[a - 1];
          console.log(sectionName.name);
          var content = "section" + '[' + [i] + ']' + '[' + [a] + ']';

          if (sectionName.name == content + '[section_code][]') {
            var confirmCode = document.createElement('pre');
            confirmCode.className = 'prettyprint linenums';
            var confirmCkEditorValue = h(CKEDITOR.instances[content + '[section_code][]'].getData());
            confirmCode.innerHTML = confirmCkEditorValue;
            confirmSection.appendChild(confirmCode);
            prettyPrint();
          } else if (sectionName.name == content + '[section_content][]') {
            var confirmContent = document.createElement('div');
            confirmContent.className = 'confirmContent';
            confirmContent.innerHTML = CKEDITOR.instances[content + '[section_content][]'].getData();
            confirmSection.appendChild(confirmContent);
          } else if (sectionName.name == content + '[section_image][]') {
            const image = new Image();
            image.className = 'confirmImage';
            const confirmImage = document.getElementsByName(content + '[section_image][]')[0].files[0];
            const reader = new FileReader();

            reader.onload = () => {
              image.src = reader.result;
            }
            reader.readAsDataURL(confirmImage);
            confirmSection.appendChild(image);
          }
        }
      }

      postingarea.classList.toggle('hidden');
      add_btn.classList.toggle('hidden');
      submitarea.classList.toggle('hidden');
      confirm.classList.toggle('hidden');
      input.classList.toggle('hidden'); // console.log(CKEDITOR.instances["section"+'['+[0]+']'+'['+[1]+']'+'[section_code][]'].getData());
    }
  });
  returnBtn.addEventListener('click', function (e) {
    document.getElementsByClassName('confirmParent')[0].remove();
    postingarea.classList.toggle('hidden');
    add_btn.classList.toggle('hidden');
    submitarea.classList.toggle('hidden');
    confirm.classList.toggle('hidden');
    input.classList.toggle('hidden');
  });
});

function lastcontent() {
  var allAdcontent = document.getElementsByClassName('addContent');
  var lastContent = allAdcontent.length;

  if (lastContent >= 2) {
    if (allAdcontent[lastContent - 2].classList.contains('hidden') == true) {
      allAdcontent[lastContent - 2].classList.toggle('hidden');
    }
  }

  allAdcontent[lastContent - 1].classList.add('hidden');
}

function h(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&#039;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  return str;
}

function judgeContent(selectcontent, count, section_place, addContent) {
  console.log(selectcontent, count, section_place, addContent);
  var btnArea = document.createElement('div');
  btnArea.className = 'my-5 col-8 offset-3';
  var buttonCode = document.createElement('button');
  var buttonContent = document.createElement('button');
  var buttonImage = document.createElement('button');
  buttonCode.className = 'btn btn-primary col-4';
  buttonCode.type = 'button';
  buttonCode.innerText = 'コードを追加';
  buttonCode.dataset.count = [count];
  buttonCode.dataset.place = [section_place];
  buttonContent.className = 'btn btn-primary col-4';
  buttonContent.type = 'button';
  buttonContent.innerText = 'ブログを追加';
  buttonContent.dataset.count = [count];
  buttonContent.dataset.place = [section_place];
  buttonImage.className = 'btn btn-primary col-4';
  buttonImage.type = 'button';
  buttonImage.innerText = '画像を追加';
  buttonImage.dataset.count = [count];
  buttonImage.dataset.place = [section_place];
  var notaddContent = document.createElement('h2');
  notaddContent.innerHTML = '×';
  btnArea.appendChild(buttonCode);
  btnArea.appendChild(buttonContent);
  btnArea.appendChild(buttonImage);
  lastcontent();

  if (selectcontent.classList.contains('code') == true) {
    console.log(selectcontent.classList);
    buttonCode.dataset.kind = "section_code";
    buttonContent.dataset.kind = "section_content";
    buttonImage.dataset.kind = "section_image";
    var codeBody = selectcontent.nextElementSibling;
    codeBody.after(btnArea);
  } else if (selectcontent.classList.contains('content') == true) {
    console.log(selectcontent.classList);
    buttonCode.dataset.kind = "section_code";
    buttonContent.dataset.kind = "section_content";
    buttonImage.dataset.kind = "section_image";
    var codeBody = selectcontent.nextElementSibling;
    codeBody.after(btnArea);
  } else {
    console.log(selectcontent.classList);
    buttonCode.dataset.kind = "section_code";
    buttonContent.dataset.kind = "section_content";
    buttonImage.dataset.kind = "section_image";
    selectcontent.after(btnArea);
  }

  buttonCode.onclick = function () {
    console.log(addContent);
    addcontent(buttonCode);
    addContent.classList.toggle('hidden');
    btnArea.classList.toggle('hidden');
  };

  buttonContent.onclick = function () {
    addcontent(buttonContent);
    btnArea.classList.toggle('hidden');
    addContent.classList.toggle('hidden');
  };

  buttonImage.onclick = function () {
    addcontent(buttonImage);
    btnArea.classList.toggle('hidden');
    addContent.classList.toggle('hidden');
  };

  notaddContent.onclick = function () {
    btnArea.classList.toggle('hidden');
    notaddContent.classList.toggle('hidden');
    addContent.classList.toggle('hidden');
  };
}

function deletecontent(deletecontent) {
  console.log(deletecontent);
  var count = deletecontent.dataset.count;
  var kind = deletecontent.dataset.kind;
  var place = deletecontent.dataset.place;
  var remove = 'section' + '[' + [place] + ']' + '[' + [count] + ']' + '[' + [kind] + '][]';
  var removeContent = document.getElementsByName(remove)[0];
  console.log(removeContent);
  console.log(removeContent.nextSibling);

  if (kind == "section_code") {
    CKEDITOR.instances[remove].destroy();
  }

  if (kind == "section_content") {
    CKEDITOR.instances[remove].destroy();
  }

  if (kind == "section_image") {
    removeContent.nextSibling.nextSibling.remove();
  }

  removeContent.nextSibling.remove();
  removeContent.remove();
  deletecontent.remove();
  var remainContent = document.getElementsByClassName('section_area')[place].getElementsByClassName('arr');
  console.log(remainContent);
  var deleteBtn = document.getElementsByClassName('section_area')[place].getElementsByClassName('deleteContent');
  var addContent = document.getElementsByClassName('section_area')[place].getElementsByClassName('addContent');

  for (var i = Number(count); i <= remainContent.length; i++) {
    console.log(remainContent[i - 1]);

    if (remainContent[i - 1].classList.contains('code') == true) {
      var ckValue = CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_code][]'].getData();
      CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_code][]'].destroy();
      remainContent[i - 1].setAttribute("name", 'section' + '[' + [place] + ']' + '[' + [i] + ']' + '[section_code][]');
      var newEditor = CKEDITOR.replace(remainContent[i - 1], {
                        startupMode: 'source'
                      });
      console.log(remainContent[i - 1]);
      CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i] + ']' + '[section_code][]'].setData(ckValue);
      deleteBtn[i - 1].setAttribute("data-count", [i]);
      addContent[i - 1].setAttribute("data-count", [i]);
      console.log(remainContent[i - 1]);
    } else if (remainContent[i - 1].classList.contains('content') == true) {
      var ckValue = CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_content][]'].getData();
      CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_content][]'].destroy();
      remainContent[i - 1].setAttribute("name", 'section' + '[' + [place] + ']' + '[' + [i] + ']' + '[section_content][]');
      var newEditor = CKEDITOR.replace(remainContent[i - 1], {
                        startupMode: 'wysiwyg'
                      });
      console.log(remainContent[i - 1]);
      CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i] + ']' + '[section_content][]'].setData(ckValue);
      deleteBtn[i - 1].setAttribute("data-count", [i]);
      addContent[i - 1].setAttribute("data-count", [i]);
      console.log(remainContent[i - 1]);
    } else {
      remainContent[i - 1].setAttribute("name", 'section' + '[' + [place] + ']' + '[' + [i] + ']' + '[section_image][]');
      deleteBtn[i - 1].setAttribute("data-count", [i]);
      addContent[i - 1].setAttribute("data-count", [i]);
      console.log(remainContent[i - 1]);
    }
  }
}

;

function addcontent(addcontent) {
  console.log(addcontent);
  var count = addcontent.dataset.count;
  var kind = addcontent.dataset.kind;
  var place = addcontent.dataset.place;
  var codeOrcontent = addcontent.classList;
  var sectionPlace = document.getElementsByClassName('section_area');
  var remainContent = document.querySelectorAll('.section_area')[place].querySelectorAll('.arr');
  var deleteBtn = document.getElementsByClassName('section_area')[place].getElementsByClassName('deleteContent');
  var addBtn = document.getElementsByClassName('section_area')[place].getElementsByClassName('addContent');
  var mark = document.getElementsByClassName('section_area')[place].getElementsByClassName('deleteContent')[count - 1];
  console.log(mark);
  var ckValues = [];
  console.log(remainContent.length, count);

  for (var i = Number(count); i < remainContent.length; i++) {
    if (remainContent[i].classList.contains('code') == true) {
      var ckValue = CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_code][]'].getData();
      console.log(ckValue); // ckValues.push(ckValue);

      CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_code][]'].destroy(); // remainContent[i].remove();
      // var inputCode = document.createElement('textarea');
      // inputCode.className = 'col-12 mb-5 code arr';
      // inputCode.name = 'section'+ '[' + [section_place] + ']' + '[' + [count] + ']' + '[section_code][]';
      // inputCode.placeholder = 'コードを書いてください';

      remainContent[i].setAttribute("name", 'section' + '[' + [place] + ']' + '[' + [i + 2] + ']' + '[section_code][]');
      ckValues.push({
        area: remainContent[i],
        value: ckValue,
        ckPlace: i + 2,
        content: 'code'
      });
      console.log(remainContent[i]); // CKEDITOR.replace(remainContent[i]);
      // CKEDITOR.instances['section'+'[' + [place] + ']' + '[' + [i+2] + ']' + '[section_code][]'].setData(ckValue);

      deleteBtn[i].setAttribute("data-count", [i + 2]);
      addBtn[i].setAttribute("data-count", [i + 2]);
    } else if (remainContent[i].classList.contains('content') == true) {
      var ckValue = CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_content][]'].getData();
      console.log(ckValue); // ckValues.push(ckValue);

      CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [i + 1] + ']' + '[section_content][]'].destroy(); // remainContent[i].remove();
      // var inputCode = document.createElement('textarea');
      // inputCode.className = 'col-12 mb-5 code arr';
      // inputCode.name = 'section'+ '[' + [section_place] + ']' + '[' + [count] + ']' + '[section_content][]';
      // inputCode.placeholder = 'コードを書いてください';

      remainContent[i].setAttribute("name", 'section' + '[' + [place] + ']' + '[' + [i + 2] + ']' + '[section_content][]');
      ckValues.push({
        area: remainContent[i],
        value: ckValue,
        ckPlace: i + 2,
        content: 'content'
      });
      console.log(remainContent[i]); // CKEDITOR.replace(remainContent[i]);
      // CKEDITOR.instances['section'+'[' + [place] + ']' + '[' + [i+2] + ']' + '[section_code][]'].setData(ckValue);
      deleteBtn[i].setAttribute("data-count", [i + 2]);
      addBtn[i].setAttribute("data-count", [i + 2]);
    } else {
      remainContent[i].setAttribute("name", 'section' + '[' + [place] + ']' + '[' + [i + 2] + ']' + '[section_image][]');
      deleteBtn[i].setAttribute("data-count", [i + 2]);
      addBtn[i].setAttribute("data-count", [i + 2]);
    }
  }

  console.log(ckValues);
  if (ckValues.length >= 1) {
    for (let _i = 0; _i <= ckValues.length - 1; _i++) {
      if(ckValues[_i].content == 'code'){
        CKEDITOR.replace(ckValues[_i].area, {
          startupMode: 'source'
        });
        CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [ckValues[_i].ckPlace] + ']' + '[section_code][]'].setData(ckValues[_i].value);
      }else if(ckValues[_i].content == 'content'){
        CKEDITOR.replace(ckValues[_i].area, {
          startupMode: 'wysiwyg'
        });
        CKEDITOR.instances['section' + '[' + [place] + ']' + '[' + [ckValues[_i].ckPlace] + ']' + '[section_content][]'].setData(ckValues[_i].value);
      }
    }
  }

  var newContent = document.querySelectorAll('.section_area')[place].querySelectorAll('.arr');
  // nodelistを配列化
  var divArray =  Array.from(newContent);

  if (kind == "section_code") {
    var newCode = document.createElement('textarea');
    newCode.className = 'col-12 mb-5 code arr';
    newCode.name = 'section' + '[' + [place] + ']' + '[' + [Number(count) + 1] + ']' + '[section_code][]';
    newCode.placeholder = 'コードを書いてください';
    divArray.splice(Number(count), 0, newCode);
    sectionPlace[Number(place)].insertBefore(newCode, mark.nextSibling);
    CKEDITOR.replace(newCode, {
      startupMode: 'source'
    });
    var deleteContent = document.createElement('h2');
    deleteContent.innerHTML = '×';
    deleteContent.className = 'deleteContent';
    deleteContent.dataset.count = [Number(count) + 1];
    deleteContent.dataset.kind = "section_code";
    deleteContent.dataset.place = [place];
    newCode.insertAdjacentElement('afterend', deleteContent); // newCode.appendChild(deleteContent);

    var addContent = document.createElement('h2');
    addContent.innerHTML = '＋';
    addContent.className = 'addContent';
    addContent.dataset.count = [Number(count) + 1];
    addContent.dataset.kind = "section_code";
    addContent.dataset.place = [place];
    newCode.insertAdjacentElement('afterend', addContent); // newCode.appendChild(addContent);

    console.log(remainContent);

    addContent.onclick = function () {
      addContent.classList.toggle('hidden');
      judgeContent(newCode, addContent.dataset.count, addContent.dataset.place, addContent);
      count++;
    };

    deleteContent.onclick = function () {
      deletecontent(deleteContent);
      count--;
    };
  } else if (kind == "section_content") {
    var newContent = document.createElement('textarea');
    console.log(newContent);
    newContent.className = 'col-12 mb-5 content arr';
    newContent.name = 'section' + '[' + [place] + ']' + '[' + [Number(count) + 1] + ']' + '[section_content][]';
    newContent.placeholder = '文を書いてください';
    divArray.splice(Number(count), 0, newContent);
    sectionPlace[Number(place)].insertBefore(newContent, mark.nextSibling);
    CKEDITOR.replace(newContent, {
      startupMode: 'wysiwyg'
    });
    var deleteContent = document.createElement('h2');
    deleteContent.innerHTML = '×';
    deleteContent.className = 'deleteContent';
    deleteContent.dataset.count = [Number(count) + 1];
    deleteContent.dataset.kind = "section_content";
    deleteContent.dataset.place = [place];
    newContent.insertAdjacentElement('afterend', deleteContent); // newContent.appendChild(deleteContent);

    var addContent = document.createElement('h2');
    addContent.innerHTML = '＋';
    addContent.className = 'addContent';
    addContent.dataset.count = [Number(count) + 1];
    addContent.dataset.kind = "section_content";
    addContent.dataset.place = [place];
    newContent.insertAdjacentElement('afterend', addContent); // newContent.appendChild(addContent);

    console.log(remainContent);

    addContent.onclick = function () {
      addContent.classList.toggle('hidden');
      judgeContent(newContent, addContent.dataset.count, addContent.dataset.place, addContent);
      count++;
    };

    deleteContent.onclick = function () {
      deletecontent(deleteContent);
      count--;
    };
  } else {
    var newImage = document.createElement('input');
    newImage.type = 'file';
    newImage.className = 'col-12 mb-5 image arr';
    newImage.name = 'section' + '[' + [place] + ']' + '[' + [Number(count) + 1] + ']' + '[section_image][]';
    newImage.placeholder = '文を書いてください';
    sectionPlace[Number(place)].insertBefore(newImage, mark.nextSibling);

    newImage.onchange = function () {
      var file = newImage.files[0];
      var reader = new FileReader();
      console.log(file);

      reader.onload = function (event) {
        console.log(event);
        var img = document.createElement("img");
        img.className = 'sectionimage';
        img.setAttribute("src", reader.result);
        sectionPlace[Number(place)].insertBefore(img, newImage.nextSibling);
        console.log(img);
      };

      reader.readAsDataURL(file);
    };

    var deleteContent = document.createElement('h2');
    deleteContent.innerHTML = '×';
    deleteContent.className = 'deleteContent';
    deleteContent.dataset.count = [Number(count) + 1];
    deleteContent.dataset.kind = "section_image";
    deleteContent.dataset.place = [place];
    newImage.insertAdjacentElement('afterend', deleteContent); // newImage.appendChild(deleteContent);

    var addContent = document.createElement('h2');
    addContent.innerHTML = '＋';
    addContent.className = 'addContent';
    addContent.dataset.count = [Number(count) + 1];
    addContent.dataset.kind = "section_image";
    addContent.dataset.place = [place];
    newImage.insertAdjacentElement('afterend', addContent); // newImage.appendChild(addContent);

    console.log(remainContent);

    addContent.onclick = function () {
      addContent.classList.toggle('hidden');
      judgeContent(newImage, addContent.dataset.count, addContent.dataset.place, addContent);
      count++;
    };

    deleteContent.onclick = function () {
      deletecontent(deleteContent);
      count--;
    };
  }
}

;

function validation() {
  var existingError = document.getElementsByClassName('error');
  console.log(existingError);

  while (existingError.length) {
    existingError.item(0).remove();
  }

  var checkValue = document.getElementsByClassName('arr');
  var errCount = 0;

  for (let i = 0; i < checkValue.length; i++) {
    if (checkValue[i].classList.contains('code') == true) {
      let checkCkValue = CKEDITOR.instances[checkValue[i].name].getData();

      if (checkCkValue.length <= 0) {
        var errArray = document.createElement('h4');
        errArray.innerHTML = 'コードが入っていません。↓';
        errArray.className = 'error';
        checkValue[i].before(errArray);
        errCount++;
      }
    } else if (checkValue[i].classList.contains('content') == true) {
      let checkCkContent = CKEDITOR.instances[checkValue[i].name].getData();
      if (checkCkContent.length < 1) {
        var _errArray = document.createElement('h4');

        _errArray.innerHTML = '内容が入っていません。↓';
        _errArray.className = 'error';
        checkValue[i].before(_errArray);
        errCount++;
      }
    } else if (checkValue[i].classList.contains('image') == true) {
      if (checkValue[i].value.length < 1) {
        let _errArray2 = document.createElement('h4');

        _errArray2.innerHTML = '画像が入っていません。↓';
        _errArray2.className = 'error';
        checkValue[i].before(_errArray2);
        errCount++;
      }
    }
  }

  return errCount;
}

;