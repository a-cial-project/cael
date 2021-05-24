window.addEventListener('DOMContentLoaded', function () {
  const addUser = document.getElementsByClassName("user");
  const addComment = document.getElementsByClassName("comment"); // (1) XMLHttpRequestオブジェクトとFormDataオブジェクトのコンストラクタを実行

  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    xhr.open('post', submitBtn.dataset.url);
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加
    // (4) フォームに入力されたデータを取得

    const user_id = document.querySelector('#user_id');
    const type_value = document.querySelector('#type_value');
    const content = document.querySelector('#content'); // (5) FormDataオブジェクトにデータをセット

    fd.append('user_id', user_id.value);
    fd.append('type_value', type_value.value);
    fd.append('content', content.value); // (6) リクエスト（要求）を送信

    xhr.send(fd);
  }); // (7) 通信完了したらレスポンスからJSONデータを取得してコンソール出力

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      console.log(res[0]['comment'], res[1]['name']);
      const viewcomment = document.getElementsByClassName('viewcomment');
      let section = document.createElement('div');
      section.className = 'section';
      viewcomment[0].insertBefore(section, viewcomment[0].firstElementChild);
      let freeComment = document.createElement('div');
      freeComment.className = 'comment';
      freeComment.innerHTML = res[0]['comment'];
      section.insertBefore(freeComment, section.firstElementChild);
      let commentUser = document.createElement('div');
      commentUser.className = 'user';
      commentUser.innerHTML = res[1]['name'];
      section.insertBefore(commentUser, section.firstElementChild);
      content.value = '';
    }
  });
});