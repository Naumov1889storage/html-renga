/*
var tabTitle = document.querySelectorAll('.tab_title__item');
var tabContent = document.querySelectorAll('.tab_content__item');

var tabLength = tabTitle.length;

for(let i = 0; i < tabTitle.length; i++) {
	tabTitle[i].addEventListener('click', function() {
		for(let a = 0; a < tabTitle.length; a++) {
			tabTitle[a].classList.remove('active');
			tabTitle[i].classList.add('active');
			tabContent[a].classList.remove('active');
			tabContent[i].classList.add('active');
		}
	})
}*/

var tab = function() {

	$('.tab_content__item').not('.active').hide();

	$('.tab_title__item').click(function() {
		var titleItem = $(this);
		var wrap = titleItem.parents('.tab_wrap');
		var contentItem = wrap.find($('.tab_content__item')).eq(titleItem.index());
		console.log(contentItem);

		titleItem.addClass('active');
		wrap.find($('.tab_title__item')).not(titleItem).removeClass('active');

		contentItem.show();
		wrap.find($('.tab_content__item')).not(contentItem).hide();
	});

};
