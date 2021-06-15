window.onload = function(){
  var element = document.documentElement;
  var bottom = element.scrollHeight - element.clientHeight;
  window.scrollTo({top: bottom, left: 0});
}

window.addEventListener('blur', (e) => {
  const room_id = document.getElementById("room_id");
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録
  // Cancel the event as stated by the standard.
  e.preventDefault();
  // Chrome requires returnValue to be set.
  e.returnValue = '';
	xhr.open('post', '/flagchange');
	xhr.setRequestHeader('X-CSRF-Token', token); // 追加
	// (4) フォームに入力されたデータを取得


  fd.append('room_id', room_id.value);
	fd.append('flag', 'out');

	xhr.send(fd);
});

window.addEventListener('focus', (e) => {
  const room_id = document.getElementById("room_id");
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録
  // Cancel the event as stated by the standard.
  e.preventDefault();
  // Chrome requires returnValue to be set.
  e.returnValue = '';
  xhr.open('post', '/flagchange');
  xhr.setRequestHeader('X-CSRF-Token', token); // 追加
  // (4) フォームに入力されたデータを取得


  fd.append('room_id', room_id.value);
  fd.append('flag', 'in');

  xhr.send(fd);
});