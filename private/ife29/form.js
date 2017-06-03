function $(a) {
	return document.querySelector(a);
}
function $all(a) {
	return document.querySelectorAll(a);
}
var btn = $('button'),
	input = $all('input');
btn.onclick = sumbit;
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
	//密码
	if(ele === arrInput[1]) {
		var len = getLength(ele.value);
		if(len >= 6 && len <= 16) {
			return result.right;
		} else {
			return result.wrong;
		}
	}
	//密码确认
	if(ele === arrInput[2]) {
		var password = arrInput[1].value;
		if(password === ele.value) {
			return result.right;
		} else {
			return result.wrong;
		}
	}
	//电子邮箱
	if(ele === arrInput[3]) {
		if(!(ele.value.match(/^[^\.@]+@[^\.@]+\.[a-z]+$/))) {
			return result.wrong;
		} else {
			return result.right;
		}
	}
	if(ele === arrInput[4]) {
		if(ele.value == parseInt(ele.value)) {
			var len = getLength(ele.value);
			if(len === 11) {
				return result.right;
			}
		} 
	return result.wrong;
	}
}
function getLength(val) {
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
	var span = document.querySelectorAll('span');
	var j = 0;
	for (var i = 0; i < span.length; i++) {
		var text = span[i].innerText;
		if (text === '√格式正确') {
			j++;
		} 
	};
	if(j == 5) {
		alert('表单已经提交！');
	} else {
		alert('表单填写不完整！');
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
			span.innerHTML = '*不能为空';
			span.className = 'visible ' + 'wrong';
			this.style.borderColor = 'red';
		} else if(verify(this) == 'wrong') {
			span.className = 'visible ' + 'wrong';
			this.style.borderColor = 'red';
			span.innerHTML = wrongTip[index];
		} else if(verify(this) == 'right') {
			span.innerHTML = '√格式正确';
			span.className = 'visible ' + 'right';
			var color = window.getComputedStyle(span, null).color;
			this.style.borderColor = color;
		}
	});
}
