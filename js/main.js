const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerBox = document.querySelector('.header__box')
const wholeBody = document.querySelector('body');
const wholeHTML = document.querySelector('html');
burger.addEventListener('click', toggleActive);

function toggleActive() {
	burger.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	wholeBody.classList.toggle('_lock');

};

let headerHeight = header.offsetHeight;

function shadowOfHeader() {
	if (window.scrollY > headerHeight) {
		header.classList.add('_shadowed');
	}
	else {
		header.classList.remove('_shadowed');
	}
};

window.addEventListener('scroll', shadowOfHeader);
