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
}