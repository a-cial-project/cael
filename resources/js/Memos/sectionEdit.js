
"use strict";


const editContent = document.querySelectorAll('.content');

for (var i = 0; i < editContent.length; i++) {
  if (editContent[i].classList.contains('code') == true) {
    var stayValue = editContent[i].name;
    CKEDITOR.replace(editContent[i]);
    CKEDITOR.instances[stayValue].setData(editContent[i].value);
  }

  addBtn(editContent[i]);
}

const addSection = document.getElementById('addSectionBtn');

addSection.addEventListener('click', function () {
  const newSectionPlace = document.querySelectorAll('.sectionput');
  const newSectionTitle = document.createElement('input');
  const countSection = document.querySelectorAll('.sectiontitle');
  newSectionTitle.type = 'text';
  newSectionTitle.classList = 'row offset-4 col-4 mb-5 sectiontitle';
  addSection.parentNode.insertBefore(newSectionTitle, addSection);
  newSectionTitle.placeholder = 'セクションのタイトル';
  newSectionTitle.name = 'section_id[0]sectiontitle[]';
  const newSectionArea = document.createElement('div');
  newSectionArea.classList = 'sectionput';
  newSectionTitle.parentNode.insertBefore(newSectionArea, newSectionTitle.nextSibling);
  const newAddContentButtonArea = document.createElement('div');
  newAddContentButtonArea.classList = "row mb-5 add_btn";
  const newAddContentButton = document.createElement('button');
  newAddContentButton.type = 'button';
  newAddContentButton.classList = 'sectionBtn btn btn-primary col-2';
  newAddContentButton.innerText = "コンテンツを追加";
  newAddContentButtonArea.appendChild(newAddContentButton);
  newSectionArea.parentNode.insertBefore(newAddContentButtonArea, newSectionArea.nextSibling);

  const newContentAddBtnArea = document.createElement('div');
  newContentAddBtnArea.classList = 'fix hidden my-5 col-9 offset-2';
  newAddContentButtonArea.parentNode.insertBefore(newContentAddBtnArea, newAddContentButtonArea.nextSibling);
  const newAddCodeButton = document.createElement('button');
  newAddCodeButton.type = 'button';
  newAddCodeButton.classList = 'btn btn-primary col-3';
  newAddCodeButton.innerText = "コードを追加";
  newAddCodeButton.dataset.addelement = 'code';
  const newAddBlogButton = document.createElement('button');
  newAddBlogButton.type = 'button';
  newAddBlogButton.classList = 'btn btn-primary col-3';
  newAddBlogButton.innerText = "ブログを追加";
  newAddBlogButton.dataset.addelement = 'blog';
  const newAddImgButton = document.createElement('button');
  newAddImgButton.type = 'button';
  newAddImgButton.classList = 'btn btn-primary col-3';
  newAddImgButton.innerText = "画像を追加";
  newAddImgButton.dataset.addelement = 'image';
  newContentAddBtnArea.appendChild(newAddCodeButton);
  newContentAddBtnArea.appendChild(newAddBlogButton);
  newContentAddBtnArea.appendChild(newAddImgButton);


  const addLastSection = document.getElementsByClassName('sectionBtn');
  const fix = document.getElementsByClassName('fix');

  for(let i = 0; i < addLastSection.length; i++){
    addLastSection[i].addEventListener('click', function () {
      addLastSection[i].classList.toggle('hidden');
      fix[i].classList.toggle('hidden');

      for (let e = 0; e < fix[i].children.length; e++) {
        fix[i].children[e].onclick = function(){
          newContent(Number(newSectionPlace.length) + 1, newSectionArea.children.length + 1, this.dataset.addelement);
          addLastSection[i].classList.toggle('hidden');
          fix[i].classList.toggle('hidden');
        };
      }
    }, false);
  }
});

const addLastSection = document.getElementsByClassName('sectionBtn');
const fix = document.getElementsByClassName('fix');

for(let i = 0; i < addLastSection.length; i++){
  addLastSection[i].addEventListener('click', function () {
    addLastSection[i].classList.toggle('hidden');
    fix[i].classList.toggle('hidden');

    for (let e = 0; e < fix[i].children.length; e++) {
      fix[i].children[e].onclick = function(){
        let newAddContentPlace = document.querySelectorAll('.sectionput')[Number(this.dataset.sectioncount) - 1].querySelectorAll('.parentcontent');
        newContent(this.dataset.sectioncount, Number(newAddContentPlace.length) + 1, this.dataset.addelement);
        addLastSection[i].classList.toggle('hidden');
        fix[i].classList.toggle('hidden');
      };
    }
  }, false);
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
  editContent.parentNode.insertBefore(addContentBtn, editContent);
  addArea.appendChild(deleteBtn);
  editContent.parentNode.appendChild(addArea);
  var addBtnArea = document.createElement('div');
  addBtnArea.classList = 'row mb-5 btnarea hidden';
  addBtnArea.style.margin = '0 auto';
  editContent.parentNode.insertBefore(addBtnArea, editContent);
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
  var letMeThink = document.createElement('h1');
  letMeThink.innerText = "×";
  addBtnArea.appendChild(addCodeBtn);
  addBtnArea.appendChild(addBlogBtn);
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
  console.log(sectionPlace, contentPlace, addElement);
  var addLocation = document.querySelectorAll('.sectionput')[sectionPlace - 1];
  var parentcontent = document.createElement('div');
  parentcontent.classList = 'parentcontent mb-5';
  addLocation.appendChild(parentcontent);

  if (addElement == 'code') {
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content code';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][' + '][section_code]');
    CKEDITOR.replace(newContent);
  } else if (addElement == 'blog') {
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content blog';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][' + '][section_content]');
  }

  newContent.setAttribute("data-sectioncount", sectionPlace);
  newContent.setAttribute("data-contentcount", contentPlace);
  parentcontent.appendChild(newContent);
  addBtn(newContent);
}

function addContent(sectionPlace, contentPlace, addElement) {
  console.log(sectionPlace, contentPlace, addElement)
  let sectionput = document.querySelectorAll('.sectionput')[sectionPlace-1].querySelectorAll('.content');
  let addLocation = sectionput[Number(contentPlace)-1].parentNode;
  for(let i = Number(sectionput.length)-1; i >= Number(contentPlace)-1; i--){
    if(sectionput[i].classList.contains('code') == true){
      let ckValue = CKEDITOR.instances[sectionput[i].name].getData();
      CKEDITOR.instances[sectionput[i].name].destroy();
      sectionput[i].setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [i + 2] + ']' + '[section_id][' + [sectionput[i].dataset.id] + '][section_code]');
      sectionput[i].setAttribute("data-contentcount", i + 2);
      CKEDITOR.replace(sectionput[i]);
      CKEDITOR.instances[sectionput[i].name].setData(ckValue);
    }else if(sectionput[i].classList.contains('blog') == true){
      sectionput[i].setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [i + 2] + ']' + '[section_id][' + [sectionput[i].dataset.id] + '][section_content]');
      sectionput[i].setAttribute("data-contentcount", i + 2);
    }
    let addBtn = sectionput[i].previousElementSibling;
    addBtn.children[0].setAttribute("data-content-place", i + 2);
    addBtn.children[1].setAttribute("data-content-place", i + 2);
  }

  const sectionArray = Array.from(sectionput);
  console.log(document.querySelectorAll('.sectionput')[sectionPlace-1].querySelectorAll('.content'));

  const parentcontent = document.createElement('div');
  parentcontent.classList = 'parentcontent mb-5';
  addLocation.parentNode.insertBefore(parentcontent, addLocation);

  if(addElement == 'code'){
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content code';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][]' + '[section_code]');
    sectionArray.splice(Number(contentPlace)-1, 0, newContent);
    CKEDITOR.replace(newContent);
  }else if(addElement == 'blog'){
    var newContent = document.createElement('textarea');
    newContent.classList = 'row col-12 content blog';
    newContent.setAttribute("name", 'section' + '[' + [sectionPlace] + ']' + '[' + [Number(contentPlace)] + '][section_id][]' + '[section_content]');
    sectionArray.splice(Number(contentPlace)-1, 0, newContent);
  }
  newContent.setAttribute("data-sectioncount", sectionPlace);
  newContent.setAttribute("data-contentcount", contentPlace);
  parentcontent.appendChild(newContent);
  addBtn(newContent);
}

function deleteContent(editContent){
  const sectioncount = editContent.dataset.sectioncount;
  const contentcount = Number(editContent.dataset.contentcount);
  const sectionput = document.querySelectorAll('.sectionput')[sectioncount-1].querySelectorAll('.content');

  if(editContent.dataset.id != undefined){
   var xhr = new XMLHttpRequest();
    var fd = new FormData();
    var token = document.getElementById('csrf_token').getAttribute('content');

    xhr.open('post', '/deletecontent');
    xhr.setRequestHeader('X-CSRF-Token', token);
    fd.append('content', editContent.dataset.id);
    xhr.send(fd);
  }

  const parentEditContent = editContent.parentNode;
  parentEditContent.remove();
  for(let i = contentcount; i < sectionput.length; i++){
    if(sectionput[i].classList.contains('code') == true){
      const ckValue = CKEDITOR.instances[sectionput[i].name].getData();
      CKEDITOR.instances[sectionput[i].name].destroy();
      sectionput[i].setAttribute("name", 'section' + '[' + [sectioncount] + ']' + '[' + [i] + ']' + '[section_id][' + [sectionput[i].dataset.id] + '][section_code]');
      sectionput[i].setAttribute("data-contentcount", i);
      CKEDITOR.replace(sectionput[i]);
    }else if(sectionput[i].classList.contains('blog') == true){
      sectionput[i].setAttribute("name", 'section' + '[' + [sectioncount] + ']' + '[' + [i] + ']' + '[section_id][' + [sectionput[i].dataset.id] + '][section_content]');
      sectionput[i].setAttribute("data-contentcount", i);
    }
    let addBtn = sectionput[i].previousElementSibling;
    addBtn.children[0].setAttribute("data-content-place", i);
    addBtn.children[1].setAttribute("data-content-place", i);
  }
}

const confirmBtn = document.getElementById('confirmBtn');
const contentArea = document.getElementsByClassName('input')[0];
const returnBtnArea = document.getElementsByClassName('confirm')[0];
confirmBtn.addEventListener('click', function (e) {
  let result = validation();

  if (result == 0) {
    contentArea.classList.toggle('hidden');
    returnBtnArea.classList.toggle('hidden');

    const confirmArea = document.createElement('div');
    confirmArea.classList = 'confirmarea';
    contentArea.after(confirmArea);

    const sectionput = document.getElementsByClassName('sectionput');
    const contentTitle = document.getElementsByClassName('sectiontitle');
    for(let i = 0; i < sectionput.length; i++){
      const confirmTitle = document.createElement('h4');
      confirmTitle.innerHTML = contentTitle[i].value;
      confirmArea.appendChild(confirmTitle);
      const contentValue = sectionput[i].getElementsByClassName('content');
      for(let a = 0; a < contentValue.length; a++){
        console.log(contentValue[a]);
        if(contentValue[a].classList.contains('code') == true){
          const confirmCode = document.createElement('pre');
          confirmCode.className = 'prettyprint linenums';
          const confirmCkEditorValue = h(CKEDITOR.instances[contentValue[a].name].getData());
          confirmCode.innerHTML = confirmCkEditorValue;
          confirmArea.appendChild(confirmCode);
          prettyPrint();
        }else if(contentValue[a].classList.contains('blog') == true){
          const confirmContent = document.createElement('div');
          confirmContent.className = 'confirmContent';
          confirmContent.innerHTML = h(contentValue[a].value);
          confirmArea.appendChild(confirmContent);
        }else if(contentValue[a].classList.contains('image') == true){
          const image = new Image();
          image.className = 'confirmImage';
          const confirmImage = document.getElementsByName(contentValue[a].name)[0].files[0];
          const reader = new FileReader();

          reader.onload = () => {
            image.src = reader.result;
          }
          reader.readAsDataURL(confirmImage);
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
  const existingError = document.getElementsByClassName('error');
  console.log(existingError);

  while (existingError.length) {
    existingError.item(0).remove();
  }

  const checkValue = document.getElementsByClassName('content');
  let errCount = 0;

  for (let i = 0; i < checkValue.length; i++) {
    if (checkValue[i].classList.contains('code') == true) {
      const checkCkValue = CKEDITOR.instances[checkValue[i].name].getData();

      if (checkCkValue.length <= 61) {
        const errArray = document.createElement('h4');
        errArray.innerHTML = 'コードが入っていません。↓';
        errArray.className = 'error';
        checkValue[i].before(errArray);
        errCount++;
      }
    } else if (checkValue[i].classList.contains('blog') == true) {
      if (checkValue[i].value.length < 1) {
        const _errArray = document.createElement('h4');

        _errArray.innerHTML = '内容が入っていません。↓';
        _errArray.className = 'error';
        checkValue[i].before(_errArray);
        errCount++;
      }
    } else if (checkValue[i].classList.contains('image') == true) {
      if (checkValue[i].value.length < 1) {
        const _errArray2 = document.createElement('h4');

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