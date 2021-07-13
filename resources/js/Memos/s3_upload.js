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
			input_file.className = 'new_file';
			input_file.display = 'none';
			input_file.setAttribute("name", "path[]");
			input_file.value = xhr.response;
			image.appendChild(input_file);

			image_zone.appendChild(imgDiv);
			imgDiv.appendChild(deleteBtn);
			imgDiv.appendChild(image);

			// 画像の削除処理
			deleteBtn.onclick = function(){
			console.log(this);
			deleteImg(this);
			}
		}
	});
}

const alreadyImg = document.getElementsByClassName('deleteBtn');
for (let i = 0; i < alreadyImg.length; i++) {
	alreadyImg[i].addEventListener('click', function (e) {
		deleteImg(this);
	},false);
}

function deleteImg(deleteImage){
	let xhr = new XMLHttpRequest();
	let fd = new FormData();
	let token = document.getElementById('csrf_token').getAttribute('content');
	const deleteImg = deleteImage.nextElementSibling.getAttribute('src');
	xhr.open('post', '/imagedelete');
	xhr.setRequestHeader('X-CSRF-Token', token);
	fd.append('img', deleteImg);
	xhr.send(fd);

	xhr.addEventListener('readystatechange', function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			deleteImage.parentNode.remove();
		}
	});
}
const submitBtn = document.getElementById('submitBtn');
let is_note_msg = true;

submitBtn.addEventListener('click', function(event) {
	is_note_msg = false;
});

window.addEventListener('beforeunload', (event) => {
	if(is_note_msg){
		// Cancel the event as stated by the standard.
		event.preventDefault();
		// Chrome requires returnValue to be set.
		event.returnValue = 'aaa';
		// setTimeout(() => {
		// 	flag = true;
		// 	setTimeout(() => {
		// 		flag = false;
		// 		console.log(flag);
		// 		return flag;
		// 	}, 1000);
		// },1);
		// console.log(flag);
	}
});

window.addEventListener('unload', function(event) {
	if(is_note_msg){
		// ロードした時はS3に保存された画像を削除する処理をする（submitを押した時は無視）
		const new_file = document.getElementsByClassName('new_file');
		for (let i = 0; i < new_file.length; i++) {
			deleteImg(new_file[i].parentNode.previousElementSibling);
		}
	}
});
