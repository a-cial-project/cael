document.addEventListener('DOMContentLoaded', function () {
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  let targetId = document.getElementsByClassName('favorite')[0];

    targetId.addEventListener('click', function (e) {
      const id = this.dataset.id;

      e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

      xhr.open('post', this.dataset.url);
      xhr.setRequestHeader('X-CSRF-Token', token); // 追加
      // (4) フォームに入力されたデータを取得

      fd.append('result_id', id);
      xhr.send(fd);
    },false);

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.response);
      const res = JSON.parse(xhr.response);

      if (!res[0]) {
        targetId.children[0].classList.remove('like');
        targetId.children[0].classList.add('unlike');
        targetId.children[1].innerHTML = "<p>" + res[1] + "</p>";
      } else {
        targetId.children[0].classList.remove('unlike');
        targetId.children[0].classList.add('like');
        targetId.children[1].innerHTML = "<p>" + res[1] + "</p>";
      }
    }
  });
}, false);