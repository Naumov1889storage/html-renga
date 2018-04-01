var accordion = function() {

	$('.content', '.accordion').slideUp(0);
	$('.title', '.accordion').click(function() {
		var accordionContent = $(this).next('.content');
		$(this).toggleClass('active');
		$(accordionContent).slideToggle(0);
	});

};


