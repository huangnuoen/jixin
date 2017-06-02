function $(a) {
	return document.querySelector(a);
}
function $all(a) {
	return document.querySelectorAll(a);
}
var btn = $('button'),
	input = $all('input');
	btn.onclick = submit;

function check() {
	document.getElementsByTagName('input')[0].className = '';		
	var a = getLength();
	if(a>=4 && a<=16) {
		infoWord.innerHTML = '格式正确';
		infoWord.className = 'right';
		document.getElementsByTagName('input')[0].className = 'green';		
	} else {
		infoWord.innerHTML = '格式错误';
		infoWord.className = 'wrong';
		document.getElementsByTagName('input')[0].className = 'red';		
	}

}
	function getLength () {
	var name = document.getElementsByTagName('input')[0];
	var inputValue = name.value.trim();
	var len = 0;
	if(inputValue) {
		for (var i = 0; i < inputValue.length; i++) {
			var code = inputValue.charCodeAt(i);
			if(code >= 0 && code <= 128) {
				len += 1;
			} else {
				len += 2;
			}
		};
	}
	return len;
}
function sumbit() {
	if(result == 'right') {
		alert('数据已经提交！');
	} else {
		alert('填写数据不合格');
	}
}
function init(){
	var input = $all('input');
	for(var i=0; i< input.length; i++) {
		input[i].onfocus = alert('2');
	}
}
init();