const category_id = document.getElementById('category_id');

const categoryChange = category_id.children;
if(document.getElementById('hide') != undefined){
	const value = document.getElementById('hide').textContent;
	for(let i = 0; i < categoryChange.length; i++){
		if(categoryChange[i].value == value){
		  categoryChange[i].selected = true;
		  document.getElementById("new_category").style.display ="none";
		}
	};
}

category_id.onchange = function(){
  if(category_id.value == 0){
    document.getElementById("new_category").style.display ="block";
  }else if(category_id.value != 0){
    document.getElementById("new_category").style.display ="none";
  }
}