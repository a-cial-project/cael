// ページング機能
window.paginate = function (items) {
  const placement = document.getElementById('search_all');
  const pagenation = document.getElementById('pagenation');
  let currentPage = 1; // 現在のページ（何ページ目か）

  if(pagenation != null){
    pagenation.remove();
  }

  const displayItems = 2; // 表示数

  const linkCount = Math.ceil(items.length / displayItems); // 端数の切り上げ

  let itemArray = [];
  let count = 0;

  for (let i = 1; i <= linkCount; i++) {
    for (let e = count; e < i * displayItems; e++) {
      itemArray.push({[i]: items[count]});
      count++;
    }
  }

  display(currentPage, itemArray);
  const paginateZone = document.createElement('div');
  paginateZone.id = 'pagenation';
  paginateZone.className = 'row';
  placement.parentNode.insertBefore(paginateZone, placement.nextElementSibling);
  const prev = document.createElement('p');
  prev.innerHTML = '＜';
  prev.id = 'prev';
  prev.className = 'hidden';
  paginateZone.appendChild(prev);
  const next = document.createElement('p');
  next.innerHTML = '＞';
  next.id = 'next';

  if (currentPage != linkCount) {
    next.onclick = function () {
      this.classList.remove('hidden');
      this.setAttribute('data-page', Number(currentPage) + 1);
      initialize(currentPage, itemArray);
      currentPage = this.dataset.page;
      display(currentPage, itemArray);
      createPrev(currentPage, itemArray);

      if (currentPage == linkCount) {
        this.classList.add('hidden');
      }
    };
  }

  for (let _i = 1; _i <= linkCount; _i++) {
    const p = document.createElement('p');
    p.id = 'page' + [_i];
    p.innerHTML = [_i];
    p.dataset.page = [_i];
    paginateZone.appendChild(p);

    p.onclick = function () {
      if (currentPage != this.dataset.page) {
        initialize(currentPage, itemArray); // createNext(currentPage, itemArray);

        currentPage = this.dataset.page;
        display(currentPage, itemArray);
        createPrev(currentPage, itemArray);
        next.setAttribute('data-page', currentPage);

        if (currentPage == linkCount) {
          next.classList.add('hidden');
        } else if (currentPage != linkCount) {
          next.classList.remove('hidden');
        }
      } else {
        return;
      }
    };

    paginateZone.appendChild(next);
  }

  const createPrev = function createPrev(value, itemArray) {
    const prevLink = document.getElementById('prev');

    if (value != 1 || prevLink.classList.contains('hidden') == true) {
      prevLink.classList.remove('hidden');
      prevLink.setAttribute('data-page', [value - 1]);

      prevLink.onclick = function () {
        initialize(value, itemArray);
        currentPage = this.dataset.page;
        display(currentPage, itemArray);
        createPrev(currentPage, itemArray);
      };
    } else if (value == 1) {
      prevLink.classList.add('hidden');
    } else {
      return;
    }
  };
};

const initialize = function initialize(value, currentItems) {
  currentItems.forEach(function (item) {
    if (Object.keys(item) == value && typeof Object.values(item)[0] != 'undefined') {
      item[value].classList.add('hidden');
    }
  });
};

const display = function display(value, itemArray) {
  console.log(value, itemArray);
  const parentAll = document.getElementById('search_all');
  itemArray.forEach(function (item) {
    if (Object.keys(item) == value && typeof Object.values(item)[0] != 'undefined') {
      item[value].classList.remove('hidden');
    }else if(Object.keys(item) == value && typeof Object.values(item)[0] == 'undefined'){
      const searchUser = document.createElement('div');
      searchUser.className = 'user hidden mr-4 mb-4';
      parentAll.appendChild(searchUser);
    }
  });
};