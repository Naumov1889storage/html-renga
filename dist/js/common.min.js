$(function() {
	var linkSpy = $('.link-spy');
	linkSpy.click(function(e) {
		e.preventDefault();

		var currentLink = $(this)
		var href = currentLink.attr('href');
		var scrollTo = $(href);
		var offsetTop = scrollTo.offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		linkSpy.not(currentLink).removeClass('active');



		setTimeout(function(){
			currentLink.addClass('active');
		}, 300);

	});


	var linkVideo = $('.video_link');
	linkVideo.click(function(e) {
		e.preventDefault();

		var currentLink = $(this);
		var href = currentLink.attr('href');
		var currentVideo = $('.video_current');
		currentVideo.attr('src', href);

		linkVideo.not(currentLink).removeClass('active');

		currentLink.addClass('active');


	});

	var responseCheckbox = $('.get_response .checkbox');
	responseCheckbox.click(function () {
		var responseInput = $(this).find('input');
		if (responseInput.attr('data-response') != 'email') {
			$('#response_phone').show()
		} else {
			$('#response_phone').hide()
		}
	});

	$('.burger, .overlay').click(function() {
		$('.burger, .header_top__menu, .newHeader__nav, .overlay').toggleClass('active');
	});

	accordion();

	tab();

});