window.onload = (event) => {
	let editor = CKEDITOR.replace('editor', {
		uiColor: '#EEEEEE',
		height: 650,
	});

	editor.on("instanceReady", function(){
		let ck = CKEDITOR.instances["ckeditor"];
		ck.document.on("keyup",function(){
		let words = CKEDITOR.instances.ckeditor.getData();//ckeditorの中の文字列をとってきてくれる
		// プレビューを映し出す処理
		let preview = document.getElementById('realtimepreview');
		console.log(words);
		preview.innerHTML = words;
		prettyPrint();
		})
	});
};

const input = document.getElementsByClassName('input')[0];
const confirm = document.getElementById('confirm');

const confirmBtn = document.getElementById('posting');

confirmBtn.addEventListener('click', function (e) {
	const err = document.getElementsByClassName('errMsg');
	while (err.length) {
		err.item(0).remove()
	}
	const memo_name = document.getElementById('memo_name').value;
	const category_id = document.getElementById('category_id');
	const status_id = document.getElementById('status');
	const confirmEditor = CKEDITOR.instances.ckeditor.getData();
	const errCount = validation();
	if(errCount == 0){
		input.classList.toggle('hidden');
		confirm.classList.toggle('hidden');
		confirmBtn.classList.toggle('hidden');

		const confirmPreview = document.createElement('div');
		confirmPreview.className = "confirmPreview";
		confirm.appendChild(confirmPreview);

		const title = document.createElement('div');
		title.className = 'title';
		const titleValue = document.createElement('h1');
		titleValue.innerHTML = 'タイトル：' + memo_name;
		title.appendChild(titleValue);
		confirmPreview.appendChild(title);

		const category = document.createElement('div');
		category.className = 'category';
		const categoryValue = document.createElement('h4');
		if(category_id.value == 0){
			categoryValue.innerHTML = 'カテゴリー：' + document.getElementById('new_category').value;
		}else{
			categoryValue.innerHTML = 'カテゴリー：' + category_id[category_id.selectedIndex].text;
		}
		category.appendChild(categoryValue);
		confirmPreview.appendChild(category);

		const status = document.createElement('div');
		status.className = 'status';
		const statusValue = document.createElement('h4');
		if(status_id.value == "privacy"){
			statusValue.innerHTML = '状態：非公開';
		}else{
			statusValue.innerHTML = '状態：公開';
		}
		status.appendChild(statusValue);
		confirmPreview.appendChild(status);

		const editor = document.createElement('div');
		editor.className = 'editor';
		editor.innerHTML = confirmEditor;
		confirmPreview.appendChild(editor);
		prettyPrint(confirmEditor);
	}
});

const returnBtn = document.getElementById('returnBtn');
returnBtn.addEventListener('click', function (e) {
	const confirmPreview = document.getElementsByClassName('confirmPreview')[0];
	confirmPreview.remove();

	input.classList.toggle('hidden');
	confirm.classList.toggle('hidden');
	confirmBtn.classList.toggle('hidden');
});

function validation(){
	let errCount = 0;
	if(memo_name.value.length <= 1){
		const errMsg = document.createElement('h3');
		errMsg.className = 'errMsg';
		errMsg.innerHTML = '↓タイトルが設定されていません。';
		memo_name.before(errMsg);
		errCount++;
	}
	if(category_id.value == '0'){
		if(document.getElementById('new_category').value.length <= 0){
			const errMsg = document.createElement('h3');
			errMsg.className = 'errMsg';
			errMsg.innerHTML = '↓カテゴリー名が設定されていません。';
			document.getElementById('new_category').before(errMsg);
			errCount++;
		}
	}
	if(CKEDITOR.instances.ckeditor.getData().length <= 61){
		const errMsg = document.createElement('h3');
		errMsg.className = 'errMsg';
		errMsg.innerHTML = '↓内容が設定されていません。';
		const parentCk = document.getElementsByClassName('section_create_form')[0];
		parentCk.before(errMsg);
		errCount++;
	}
	return errCount;
}