//检查id和href是否匹配
function checkID (id) {
	var $ul = $('.download ul.software');
	console.log($ul);
	for (var i = 0; i < $ul.length; i++) {
		if($ul[i].getAttribute('id') != id) {
			$ul[i].style.display = 'none';
		} else {
			$ul[i].style.display = 'block';
		}
	};
}
//导航跳转软件
function goSolfware() {
	var $links = $('.download ul.sort li a[href]');
	for (var i = 0; i < $links.length; i++) {
		var href = $links[i].getAttribute('href');
		var id = href.split('#')[1];
		$links[i].destination = id;
		$links[i].onclick = function() {
			checkID(this.destination);
			$(this).parent().addClass('selected').siblings().removeClass('selected');	
		}
	};
}
//软件跳转下载页
window.onload = function() {
	goSolfware();
}



