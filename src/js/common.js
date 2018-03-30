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


