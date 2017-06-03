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
var tip = ['名称必须在4-16字符之间', '请输入6到16位数字和字母', '两次输入密码', '请输入合法电子邮箱', '输入11位手机号码'];
var result =  {
	empty: 'empty',
	wrong: 'wrong',
	right: 'right'
}
function verify(ele) {
	if(!ele.value) {
		return result.empty;
	}
	//名称
	if(ele === arrInput[0]) {
		var len = getLength(ele.value);
		if(len < 4 || len > 128) {
			return result.wrong;
		} else {
			return result.right;
		}
	}
/*	document.getElementsByTagName('input')[0].className = '';		
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
*/
}
function getLength(val) {
	var name = document.getElementsByTagName('input')[0];
	var inputValue = val.trim();
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
		span.innerHTML = tip[index];
		span.className = "visible";
	});
	arrInput[i].addEventListener('blur', function(e){
		var index = arrInput.indexOf(e.target);
		var span = this.parentNode.querySelector('span');
		if(/*verify(this)==1*/verify(this) == 'empty') {
			span.innerHTML = '不能为空';
			span.className = 'visible ' + 'wrong';
			this.style.borderColor = 'red';
		} else if(verify(this) == 'wrong') {
			span.className = 'visible ' + 'wrong';
			this.style.borderColor = 'red';
			span.innerHTML = wrongTip[index];
		} else if(verify(this) == 'right') {
			span.innerHTML = '格式正确';
			span.className = 'visible ' + 'right';
			var color = window.getComputedStyle(span, null).color;
			this.style.borderColor = color;
		}
	});
}
