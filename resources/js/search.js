window.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.getElementById("search-icon");
  const search_all = document.getElementById('search_all');
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  const token = document.getElementById('csrf_token').getAttribute('content'); // (2) 送信ボタンがクリックされたら処理を実行するようにイベントリスナーに登録

  searchBtn.addEventListener('click', function (e) {
    const countAlreadyResult = search_all.childElementCount;

    if (countAlreadyResult != 0) {
      document.getElementsByClassName("alreadyResult")[0].remove();
    }

    e.preventDefault(); // (3) 通信メソッドと取得するデータのURLを指定

    const searchValue = document.getElementById("search_value").value;
    const params = document.getElementById("params").value;
    xhr.open('post', params);
    xhr.setRequestHeader('X-CSRF-Token', token);
    fd.append('value', searchValue);
    xhr.send(fd);
  }); // (7) 通信完了したらレスポンスからJSONデータを取得してコンソール出力

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const results = JSON.parse(xhr.response);
      console.log(results);
      const resultCount = results[0].length;
      const url = location.href;
      const searchResultsBox = document.createElement('div');
      searchResultsBox.className = 'row mx-3 mb-5 alreadyResult';
      search_all.appendChild(searchResultsBox);

      if (resultCount > 0) {
        for (let i = 0; i < resultCount; i++) {
          const searchResult = document.createElement('div');
          searchResult.className = 'result hidden mr-4 mb-4';
          searchResultsBox.appendChild(searchResult);
          const linkValue = document.createElement('a');
          linkValue.href = url + results[1] + '/' + results[0][i]['id'];
          linkValue.innerHTML = results[0][i]['name'];
          searchResult.appendChild(linkValue);
          if(results[1] != 'user'){
            const iconParent = document.createElement('div');
            iconParent.className = 'favorite';
            iconParent.dataset.id = results[0][i]['id'];
            iconParent.dataset.order = [i];
            searchResult.appendChild(iconParent);
            const icon = document.createElement('i');
            if(results[0][i]['result'] != null){
              icon.className = 'fas' + ' ' + results[2] + ' ' + 'like';
            }else{
              icon.className = 'fas' + ' ' + results[2] + ' ' + 'unlike';
            }
            iconParent.appendChild(icon);
            const p = document.createElement('p');
            p.innerHTML = results[0][i]['count'];
            iconParent.appendChild(p);
          }
        }
        const createValues = document.getElementsByClassName("result");
        paginate(createValues);
        clickFavorite(results[3]);
      } else if (resultCount == 0) {
        const notResult = document.createElement('h3');
        notResult.innerHTML = 'そのようなユーザーは見つかりませんでした。';
        search_all.appendChild(notResult);
      }
    }
  });
});