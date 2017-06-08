//不同地区的大学作为对象进行保存
var area = {
	BJ: ['清华大学', '人民大学', '科技大学', '北京大学'],
	GD: ['中山大学', '华南理工', '广州大学', '深圳大学'],
	SH: [ '交通大学', '复旦大学', ]
}
//根据radio选择的值出现相应的div
function getInput () {
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked) {
			console.log(radio[i].value);
			var school = document.querySelector('#area');	
			var work = document.querySelector('#work');
			if(radio[i].value == 'worker') {
				work.style.display = 'block';
				school.style.display = 'none';
			} else {
				var school = document.querySelector('#area');
				school.style.display = 'block';
				work.style.display = 'none';
			}
		}
	};
}
//通过for循环绑定点击事件
var radio = document.getElementsByName('job');
for (var i = 0; i < radio.length; i++) {
	radio[i].addEventListener('click', getInput);
};
function showSchool() {
	var select = document.querySelector('#school');
	console.log(select.value);
	var index = select.selectedIndex;
	var newOption = '';
	for(var k in area) {
		if(select.value == k) {
			//生成相应option
			for (var j = 0; j < area[k].length; j++) {
				newOption += '<option>' + area[k][j] + '</option>';
			};
		}
	}
	//将生成的option添加到select中
	var shoolSelect = document.getElementById('new');
	shoolSelect.innerHTML = newOption;
}
var school = document.querySelector('#school');
//select状态改变时，执行showSchool函数
school.addEventListener('change', showSchool);
//文档开始加载时先执行一次showSchool
showSchool();