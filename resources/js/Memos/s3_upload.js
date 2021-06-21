const input = document.getElementById('image_input');

input.addEventListener('change', function (e) {
    fileReader(this.files[0]);
  },false);

function fileReader(addImage){
  let xhr = new XMLHttpRequest();
  let fd = new FormData();
  let token = document.getElementById('csrf_token').getAttribute('content');

  xhr.open('post', '/imageupload');
  xhr.setRequestHeader('X-CSRF-Token', token);
  fd.append('image', addImage);
  xhr.send(fd);

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const image_zone = document.getElementById('image_zone');
      const imgDiv = document.createElement('div');
      imgDiv.className = 'img_parent';
      const deleteBtn = document.createElement('div');
      deleteBtn.className = 'deleteBtn';
      deleteBtn.innerHTML = '×';
      const image = new Image();
      image.className = 'image';
      image.src = xhr.response;
      const input_file = document.createElement('input');
      input_file.type = 'text';
      input_file.display = 'none';
      input_file.setAttribute("name", "path[]");
      input_file.value = xhr.response;
      image.appendChild(input_file);

      image_zone.appendChild(imgDiv);
      imgDiv.appendChild(image);
      imgDiv.appendChild(deleteBtn);

      // 画像の削除処理
      imgDiv.onclick = function(){
        deleteImg(this);
      }
    }
  });
}

function deleteImg(deleteImage){
  let xhr = new XMLHttpRequest();
  let fd = new FormData();
  let token = document.getElementById('csrf_token').getAttribute('content');
  const deleteImg = deleteImage.firstElementChild.getAttribute('src');
  console.log(deleteImg);
  xhr.open('post', '/imagedelete');
  xhr.setRequestHeader('X-CSRF-Token', token);
  fd.append('img', deleteImg);
  xhr.send(fd);

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      deleteImage.remove();
    }
  });
}
