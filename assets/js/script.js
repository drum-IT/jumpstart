$(document).ready(function() {
	$('.carousel').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		draggable: false,
		pauseOnHover: false
	});
});

var scrollDistance = 0;

$(window).scroll(function(event) {
	var $topScroll = $(this).scrollTop();
	if ($topScroll >= (scrollDistance + 50)) {
		var $navHeight = $('.navbar').height();
		$('.navbar').animate({
			top: ($navHeight * -1)
		}, 150);
		scrollDistance = $topScroll;
	} else if (scrollDistance >= ($topScroll + 50)) {
		$('.navbar').animate({
			top: '0px'
		}, 150);
		scrollDistance = $topScroll;
	}
});
