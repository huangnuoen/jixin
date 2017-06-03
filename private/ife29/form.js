function $(a) {
	return document.querySelector(a);
}
function $all(a) {
	return document.querySelectorAll(a);
}
var btn = $('button'),
	input = $all('input');
//将nodelist转化为array
var arrInput = [].slice.call(input);
var wrongTip = ['名称长度必须在4-16字符之间', '请输入6到16位字符且只能为数字和字母', '两次密码必须一致', '电子邮箱不合法', '手机号码格式错误'];

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
//为每个input添加事件
for(var i = 0 ; i < arrInput.length; i++) {
	console.log(arrInput[i]);
	arrInput[i].addEventListener('focus', function(e){
		var index = arrInput.indexOf(e.target);
		var span = this.parentNode.querySelector('span');
		span.className = "visible";
	});
	arrInput[i].addEventListener('blur', function(e){
		var index = arrInput.indexOf(e.target);
		var span = this.parentNode.querySelector('span');
		span.innerHTML = '不能为空';
		span.className = 'visible ' + 'wrong';
		this.style.borderColor = 'red';
	});
}

// input[0].addEventListener('focus', function(e) {
// 	sumbit();
// })