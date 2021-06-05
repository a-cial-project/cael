document.addEventListener('DOMContentLoaded', function () {
  const room_id = document.getElementById("room_id");
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  const submitBtn = document.getElementById("submit");
  const image = document.getElementById("image");
  submitBtn.onclick = function(e){
    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    xhr.open('post', '/message');
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加
    // (4) フォームに入力されたデータを取得

    const message = document.getElementById("message");

    fd.append('room_id', room_id.value);
    fd.append('message', message.value);

    xhr.send(fd);


  }; // (7) 通信完了したらレスポンスからJSONデータを取得してコンソール出力

  image.addEventListener('change', function (e) {
    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    xhr.open('post', '/message');
    xhr.setRequestHeader('X-CSRF-Token', token); // 追加

    fd.append('room_id', room_id.value);
    fd.append('content', this.files[0]);
    xhr.send(fd);
  },false);

  window.Echo.channel("cael").listen("MessageSent", e => {
    document.getElementById("message").value = '';
    const position = document.getElementById('all_message');
    if(e.message.room_id == room_id.value){
      if(e.message.user_id == document.getElementById('user_id').value){
        const newMessage = document.createElement('div');
        newMessage.className = 'row my_message';
        if(e.message.message != null){
          const messageP = document.createElement('p');
          messageP.innerHTML = e.message.message;
          newMessage.appendChild(messageP);
          position.appendChild(newMessage);
        }else if(e.message.content != null){
          const imgParent = document.createElement('div');
          imgParent.className = "image_parent";
          const image = new Image();
          image.className = 'content';
          image.src = e.message.content;
          newMessage.appendChild(imgParent);
          imgParent.appendChild(image);
          position.appendChild(newMessage);
        }
      }else{
        const newMessage = document.createElement('div');
        newMessage.className = 'row other_message';
        if(e.message.message != null){
          const messageP = document.createElement('p');
          messageP.innerHTML = e.message.message;
          newMessage.appendChild(messageP);
          position.appendChild(newMessage);
        }else if(e.message.content != null){
          const imgParent = document.createElement('div');
          imgParent.className = "image_parent";
          const image = new Image();
          image.className = 'content';
          image.src = e.message.content;
          newMessage.appendChild(imgParent);
          imgParent.appendChild(image);
          position.appendChild(newMessage);
        }
      }
    }
  });
});
