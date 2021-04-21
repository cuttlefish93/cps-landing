import '../scss/main.scss';

import Swiper from 'swiper/bundle';

// ПЕРЕМЕННЫЕ
const modalCloseBtns = document.querySelectorAll('.modal__close-btn');
const writeBtns = document.querySelectorAll('.button--write');
const callBtns = document.querySelectorAll('.button--call');
const overlayModal = document.querySelector('.overlay--modal');
const overlaySideMenu = document.querySelector('.overlay--nav');
const sideMenu = document.querySelector('.nav');
const showMoreSlidesBtns = document.querySelectorAll('.slider__btn--show');
const hideSlidesBtns = document.querySelectorAll('.slider__btn--hide');
const sliders = document.querySelectorAll('.slider__wrapper');
const tabsContainer = document.querySelector('.detailed-nav__list');
const tabHeaders = document.querySelectorAll('.detailed-nav__link');
const tabContent = document.querySelectorAll('.detailed-nav__info');

const mySwipers = [];

// ФУНКЦИИ
function toggleModalVisibility(modalNode) {
	overlayModal.classList.toggle('hidden');
	modalNode.classList.toggle('opened');
}

function toggleSideMenuVisibility() {
	overlaySideMenu.classList.toggle('hidden');
	sideMenu.classList.toggle('opened');
}

function mobileSlider() {
	const sliders = document.querySelectorAll('.swiper-container');
	if (window.innerWidth <= 767) {
		sliders.forEach((el) => {
			const swiper = new Swiper(el, {
				slidesPerView: 'auto',
				freeMode: true,
				spaceBetween: 16,
				watchSlidesVisibility: true,
				pagination: {
					el: el.querySelector('.swiper-pagination'),
					clickable: true,
				},
			});

			mySwipers.push(swiper);
		});
	}

	if (window.innerWidth >= 768 && mySwipers.length) {
		mySwipers.forEach((swiper) => swiper.destroy());
	}
}

function resetSlidesState() {
	if (window.innerWidth >= 768) {
		sliders.forEach((slider) => slider.classList.remove('opened'));
	}
}

function resetBtnsState() {
	if (window.innerWidth <= 767) {
		showMoreSlidesBtns.forEach((btn) => btn.classList.add('hidden'));
		hideSlidesBtns.forEach((btn) => btn.classList.add('hidden'));
	}

	if (window.innerWidth >= 768) {
		showMoreSlidesBtns.forEach((btn) => btn.classList.remove('hidden'));
		hideSlidesBtns.forEach((btn) => btn.classList.add('hidden'));
	}
}

// ОБРАБОТЧИКИ СОБЫТИЙ
modalCloseBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		toggleModalVisibility(btn.closest('.modal'));
	});
});

overlayModal.addEventListener('click', () => {
	toggleModalVisibility(document.querySelector('.modal.opened'));
});

overlaySideMenu.addEventListener('click', toggleSideMenuVisibility);

document.addEventListener('keydown', (evt) => {
	if (evt.key === 'Escape' && document.querySelector('.modal.opened')) {
		toggleModalVisibility(document.querySelector('.modal.opened'));
	}

	if (evt.key === 'Escape' && document.querySelector('.nav.opened')) {
		toggleSideMenuVisibility();
	}
});

writeBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		toggleModalVisibility(document.querySelector('.modal-feedback'));
	});
});

callBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		toggleModalVisibility(document.querySelector('.modal-call'));
	});
});

document
	.querySelector('.button--burger')
	.addEventListener('click', toggleSideMenuVisibility);

document
	.querySelector('.nav__close-btn')
	.addEventListener('click', toggleSideMenuVisibility);

tabsContainer.addEventListener('click', (evt) => {
	evt.preventDefault();

	if (!evt.target.classList.contains('detailed-nav__link')) return;

	const activeTabHeader = evt.target;
	const contentId = evt.target.href.split('#')[1];
	const activeTabContent = Array.from(tabContent).find((el) =>
		el.classList.contains(contentId),
	);

	tabHeaders.forEach((el) => el.classList.remove('active'));
	tabContent.forEach((el) => el.classList.remove('active'));

	activeTabHeader.classList.add('active');
	activeTabContent.classList.add('active');
});

showMoreSlidesBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('hidden');
		btn.nextElementSibling.classList.toggle('hidden');
		btn
			.closest('.slider')
			.querySelector('.slider__wrapper')
			.classList.toggle('opened');
	});
});

hideSlidesBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('hidden');
		btn.previousElementSibling.classList.toggle('hidden');
		btn
			.closest('.slider')
			.querySelector('.slider__wrapper')
			.classList.toggle('opened');
	});
});

window.addEventListener('resize', () => {
	resetBtnsState();
	resetSlidesState();
	mobileSlider();
});

document.addEventListener('DOMContentLoaded', () => {
	resetBtnsState();
	resetSlidesState();
	mobileSlider();
});
