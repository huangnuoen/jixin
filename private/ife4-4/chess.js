//前进
function go () {
	var box = document.getElementById('box');
	var top = box.offsetTop;
	var left = box.offsetLeft;
	box.style.top =  top - 43 + 'px';
	console.log(box.style.top);
	return false;
}
var g = document.getElementById('go');
g.onclick = go;
//改变方向
