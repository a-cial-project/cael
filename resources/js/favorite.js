window.clickFavorite = function (favoriteUrl) {
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  let resultId = document.getElementsByClassName('favorite');

  for (let i = 0; i < resultId.length; i++) {
    resultId[i].addEventListener('click', function (e) {
      const id = this.dataset.id;
      const order_id = this.dataset.order;

      e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

      xhr.open('post', favoriteUrl);
      xhr.setRequestHeader('X-CSRF-Token', token); // 追加
      // (4) フォームに入力されたデータを取得

      fd.append('result_id', id);
      fd.append('order_id', order_id);
      xhr.send(fd);
    },false);
  }

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    	console.log(xhr.response);
      const res = JSON.parse(xhr.response);
      const favoriteChange = document.getElementsByClassName('favorite')[res[2]];
      console.log(favoriteChange);

      if (!res[0]) {
        favoriteChange.children[0].classList.remove('like');
        favoriteChange.children[0].classList.add('unlike');
        favoriteChange.children[1].innerHTML = "<p>" + res[1] + "</p>";
      } else {
        favoriteChange.children[0].classList.remove('unlike');
        favoriteChange.children[0].classList.add('like');
        favoriteChange.children[1].innerHTML = "<p>" + res[1] + "</p>";
      }
    }
  });
};