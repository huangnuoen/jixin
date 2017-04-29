//获得id
function checkID (id) {
	var $div = $('.contacts .col-md-9');
	console.log($div);
	for (var i = 0; i < $div.length; i++) {
		if($div[i].getAttribute('id') != id) {
			$div[i].style.display = 'none';
		} else {
			$div[i].style.display = 'block';
		}
	};
}
//获得href
window.onload = function() {
	var $links = $('.contacts .col-md-3 ul li a[href]');
	for (var i = 0; i < $links.length; i++) {
		var href = $links[i].getAttribute('href');
		var id = href.split('#')[1];
		$links[i].destination = id;
		$links[i].onclick = function() {
			checkID(this.destination);
			$('.contacts .col-md-3 ul li li a.selected[href]').removeClass('selected');			this.setAttribute('class', 'selected');
		}
	};
}


