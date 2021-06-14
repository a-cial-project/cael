	const throttle = (function(callback, interval = 1500) {
	  let time = Date.now(),
	      lag,
	      debounceTimer,
	      debounceDelay = 16;

	  return function(callback) {
	    lag = time + interval - Date.now();
	    if (lag < 0) {
	      //console.log( time + "：throttle：" + lag);
	      callback();
	      time = Date.now();
	    } else {
	      clearTimeout(debounceTimer);
	      debounceTimer = setTimeout(function() {
	        //console.log( time + "：debounce：" + (interval - lag + debounceDelay));
	        callback();
	      }, (interval - lag + debounceDelay));
	    }
	  }
	})();
	const xhr = new XMLHttpRequest();
	const fd = new FormData();
	const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録
	const scrollFlag = 55;

	// 間引きしたい処理
	let count = 1;
	function 	myCallback(){
		if(window.scrollY < scrollFlag){

	    xhr.open('post', '/infinitescroll');
	    xhr.setRequestHeader('X-CSRF-Token', token); // 追加
	    // (4) フォームに入力されたデータを取得


	    fd.append('room_id', document.getElementById('room_id').value);
	    fd.append('count', count++);
	    xhr.send(fd);

		}
	};

	// イベント発火
	window.addEventListener('scroll', function() {
	  throttle(myCallback);
	  //throttle(myCallback,64); //第二引数 インターバル時間
	});

	xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const res = JSON.parse(xhr.response);

      const all_message = document.getElementById('all_message');
      for(let i = res.length - 1; i >= 0; i--){
      	// 自分のメッセージ
	      if(res[i].user_id == document.getElementById('user_id').value){
	      	const loadMessage = document.createElement('div');
	      	loadMessage.className = 'row my_message mb-3';
	      	all_message.insertBefore(loadMessage, all_message.firstChild);
	      	const yourName = document.createElement('h6');
	      	yourName.innerHTML = 'あなた';
	      	// メッセージの場合の処理
	      	if(res[i].message != null){
		      	const yourMessage = document.createElement('div');
		      	yourMessage.className = 'message ml-auto';
		      	const message = document.createElement('p');
		      	message.innerHTML = res[i].message;

		      	yourMessage.appendChild(message);
		      	loadMessage.appendChild(yourName);
		      	loadMessage.appendChild(yourMessage);
	      	}else{
	      		const contentParent = document.createElement('div');
	      		contentParent.className = 'image_parent';
	      		if(res[i].content != null){
	      			// 画像の場合の処理
	      			const image = document.createElement('img');
	      			image.className = 'content';
	      			image.src = res[i].content;
	      			contentParent.appendChild(image);
	      		}else if(res[i].movie != null){
	      			// 動画の場合の処理
	      			const movie = document.createElement('video');
	      			movie.src = e.message.movie;
          		movie.controls = "controls";
          		contentParent.appendChild(movie);
	      		}
	      	}

	      	if(res[i].status == 0){
	      		const messageStatus = document.createElement('span');
	      		messageStatus.innerHTML = '既読';
	      		loadMessage.appendChild(messageStatus);
	      	}

	      }else{
	      	// 相手のメッセージ
	      	const loadMessage = document.createElement('div');
	      	loadMessage.className = 'row other_message mb-3';
	      	all_message.insertBefore(loadMessage, all_message.firstChild);
	      	const otherName = document.createElement('h6');
	      	otherName.innerHTML = res[i].user.name;
	      	// メッセージの場合の処理
	      	if(res[i].message != null){
		      	const otherMessage = document.createElement('div');
		      	otherMessage.className = 'message';
		      	const message = document.createElement('p');
		      	message.innerHTML = res[i].message;

		      	yourMessage.appendChild(message);
		      	loadMessage.appendChild(otherName);
		      	loadMessage.appendChild(otherMessage);
	      	}else{
	      		const contentParent = document.createElement('div');
	      		contentParent.className = 'image_parent';
	      		if(res[i].content != null){
	      			// 画像の場合の処理
	      			const image = document.createElement('img');
	      			image.className = 'content';
	      			image.src = res[i].content;
	      			contentParent.appendChild(image);
	      		}else if(res[i].movie != null){
	      			// 動画の場合の処理
	      			const movie = document.createElement('video');
	      			movie.src = e.message.movie;
          		movie.controls = "controls";
          		contentParent.appendChild(movie);
	      		}
	      	}
	      }
    	}
    }
	});
