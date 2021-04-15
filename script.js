const showBrandsBtn = document.querySelector('.brands-slider__btn--show');
const hideBrandsBtn = document.querySelector('.brands-slider__btn--hide');
const brandsSliderWrapper = document.querySelector('.brands-slider__wrapper');
const openMenuBtn = document.querySelector('.button--burger');
const closeMenuBtn = document.querySelector('.nav__close-btn');
const sideNav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

function hideSlides(screenWidth) {
	const slides = document.querySelectorAll('.brands-slider__slide');
	let slidesToHide;

	if (screenWidth >= 768 && screenWidth < 1440) {
		slidesToHide = Array.from(slides).slice(6);
	}

	if (screenWidth >= 1440) {
		slidesToHide = Array.from(slides).slice(8);
	}

	slidesToHide.forEach((el) => (el.style.display = 'none'));
}

function showSlides() {
	const slides = Array.from(document.querySelectorAll('.brands-slider__slide'));
	slides.forEach((el) => (el.style.display = 'flex'));
}

// swiper instance
const swiper = new Swiper('.brands-slider', {
	init: false,
	wrapperClass: 'brands-slider__wrapper',
	slideClass: 'brands-slider__slide',
	freeMode: true,
	spaceBetween: 16,
	slidesPerView: 'auto',
	watchSlidesVisibility: true,
	pagination: {
		el: '.brands-slider__pagination',
		clickable: true,
	},
});

// event listeners

// on window resize
window.addEventListener('resize', () => {
	if (window.innerWidth <= 767) {
		swiper.init();
		showBrandsBtn.classList.add('hidden');
		showSlides();
	}

	if (window.innerWidth >= 768) {
		showBrandsBtn.classList.remove('hidden');
		hideSlides(window.innerWidth);
	}
});

// on dom loaded
document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth <= 767) {
		swiper.init();
		showBrandsBtn.classList.add('hidden');
	}

	if (window.innerWidth >= 768) {
		showBrandsBtn.classList.remove('hidden');
		hideSlides(window.innerWidth);
	}

	if (window.innerWidth >= 1120) {
		sideNav.classList.remove('hidden');
	}
});

// on btn click
showBrandsBtn.addEventListener('click', () => {
	showBrandsBtn.classList.add('hidden');
	hideBrandsBtn.classList.remove('hidden');
	showSlides();
});

// on btn click
hideBrandsBtn.addEventListener('click', () => {
	showBrandsBtn.classList.remove('hidden');
	hideBrandsBtn.classList.add('hidden');
	hideSlides(window.innerWidth);
});

// handle side menu
openMenuBtn.addEventListener('click', () => {
	sideNav.classList.toggle('hidden');
	overlay.classList.toggle('hidden');
});

closeMenuBtn.addEventListener('click', () => {
	sideNav.classList.toggle('hidden');
	overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
	sideNav.classList.toggle('hidden');
	overlay.classList.toggle('hidden');
});

document.addEventListener('keydown', (evt) => {
	if (evt.code === 'Escape') {
		sideNav.classList.toggle('hidden');
		overlay.classList.toggle('hidden');
	}
});

const mql = window.matchMedia('(min-width: 1120px)');
mql.addEventListener('change', (evt) => {
	if (evt.matches) {
		sideNav.classList.remove('hidden');
	}
});
