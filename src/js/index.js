import '../scss/main.scss';

import Swiper from 'swiper/bundle';

const modalCloseBtns = document.querySelectorAll('.modal__close-btn');
const writeBtns = document.querySelectorAll('.button--write');
const callBtns = document.querySelectorAll('.button--call');
const overlayModal = document.querySelector('.overlay--modal');
const overlayNav = document.querySelector('.overlay--nav');
const navMenu = document.querySelector('.nav');

function toggleModalVisibility(modalNode) {
	overlayModal.classList.toggle('hidden');
	modalNode.classList.toggle('opened');
}

function toggleNavVisibility() {
	overlayNav.classList.toggle('hidden');
	navMenu.classList.toggle('opened');
}

modalCloseBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		toggleModalVisibility(btn.closest('.modal'));
	});
});

overlayModal.addEventListener('click', () => {
	toggleModalVisibility(document.querySelector('.modal.opened'));
});

overlayNav.addEventListener('click', toggleNavVisibility);

document.addEventListener('keydown', (evt) => {
	if (evt.key === 'Escape' && document.querySelector('.modal.opened')) {
		toggleModalVisibility(document.querySelector('.modal.opened'));
	}

	if (evt.key === 'Escape' && document.querySelector('.nav.opened')) {
		toggleNavVisibility();
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
	.addEventListener('click', toggleNavVisibility);
document
	.querySelector('.nav__close-btn')
	.addEventListener('click', toggleNavVisibility);

// SWIPER INITIALIZATION
const mySwipers = [];

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

// function toggleSlidesVisibility(slidesArr, sliderName) {
// 	console.log(slidesArr);
// 	let slidesToHide;

// 	if (window.innerWidth <= 767) {
// 		showSlides(document.querySelectorAll('.slider__slide'));
// 		isSlidesOpen = false;
// 		console.log(isSlidesOpen);
// 	}

// 	if (isSlidesOpen) {
// 		return;
// 	}

// 	if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
// 		if (sliderName === 'brands') {
// 			slidesToHide = slidesArr.slice(6);
// 			slidesToHide.forEach((el) => (el.style.display = 'none'));
// 		}

// 		if (sliderName === 'devices') {
// 			slidesToHide = slidesArr.slice(3);
// 			slidesToHide.forEach((el) => (el.style.display = 'none'));
// 		}
// 	}

// 	if (window.innerWidth >= 1440) {
// 		if (sliderName === 'brands') {
// 			slidesToHide = slidesArr.slice(8);
// 			slidesToHide.forEach((el) => (el.style.display = 'none'));
// 		}

// 		if (sliderName === 'devices') {
// 			slidesToHide = slidesArr.slice(4);
// 			slidesToHide.forEach((el) => (el.style.display = 'none'));
// 		}
// 	}
// }

// function showSlides(slidesArr) {
// 	slidesArr.forEach((el) => (el.style.display = 'flex'));
// }

// function resetBtnsVisibility(showBtn, hideBtn) {
// 	if (window.innerWidth <= 767) {
// 		showBtn.classList.add('hidden');
// 		hideBtn.classList.add('hidden');
// 	}

// 	if (window.innerWidth >= 768 && hideBtn.classList.contains('hidden')) {
// 		showBtn.classList.remove('hidden');
// 	}
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	mobileSlider();
// 	toggleSlidesVisibility(
// 		Array.from(document.querySelectorAll('.brands__slider-slide')),
// 		'brands',
// 	);
// 	toggleSlidesVisibility(
// 		Array.from(document.querySelectorAll('.devices__slider-slide')),
// 		'devices',
// 	);
// 	resetBtnsVisibility(
// 		document.querySelector('.brands__slider-btn--show'),
// 		document.querySelector('.brands__slider-btn--hide'),
// 	);
// 	resetBtnsVisibility(
// 		document.querySelector('.devices__slider-btn--show'),
// 		document.querySelector('.devices__slider-btn--hide'),
// 	);
// });

// window.addEventListener('resize', () => {
// 	mobileSlider();
// 	toggleSlidesVisibility(
// 		Array.from(document.querySelectorAll('.brands__slider-slide')),
// 		'brands',
// 	);
// 	toggleSlidesVisibility(
// 		Array.from(document.querySelectorAll('.devices__slider-slide')),
// 		'devices',
// 	);
// 	resetBtnsVisibility(
// 		document.querySelector('.brands__slider-btn--show'),
// 		document.querySelector('.brands__slider-btn--hide'),
// 	);
// 	resetBtnsVisibility(
// 		document.querySelector('.devices__slider-btn--show'),
// 		document.querySelector('.devices__slider-btn--hide'),
// 	);
// 	console.log(isSlidesOpen);
// });

// const brandsSliderWrapper = document.querySelector('.brands-slider__wrapper');
// const openMenuBtn = document.querySelector('.button--burger');
// const closeMenuBtn = document.querySelector('.nav__close-btn');
// const sideNav = document.querySelector('.nav');
// const overlay = document.querySelector('.overlay');

// function toggleBtnsVisibility() {
// 	showBrandsBtn.classList.toggle('hidden');
// 	hideBrandsBtn.classList.toggle('hidden');
// }

// document.querySelectorAll('.slider__btn--show').forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		isSlidesOpen = !isSlidesOpen;
// 		console.log(isSlidesOpen);
// 		btn.classList.toggle('hidden');
// 		btn
// 			.closest('.slider')
// 			.querySelector('.slider__btn--hide')
// 			.classList.toggle('hidden');
// 		showSlides(btn.closest('.slider').querySelectorAll('.slider__slide'));
// 	});
// });

// document.querySelectorAll('.slider__btn--hide').forEach((btn) => {
// 	btn.addEventListener('click', () => {
// 		const sliderName = btn.dataset.slider;
// 		isSlidesOpen = !isSlidesOpen;
// 		console.log(isSlidesOpen);
// 		btn.classList.toggle('hidden');
// 		btn
// 			.closest('.slider')
// 			.querySelector('.slider__btn--show')
// 			.classList.toggle('hidden');
// 		toggleSlidesVisibility(
// 			Array.from(document.querySelectorAll(`.${sliderName}__slider-slide`)),
// 			sliderName,
// 		);
// 	});
// });

// showBrandsBtn.addEventListener('click', () => {
// 	isSlidesOpen = !isSlidesOpen;
// 	console.log(isSlidesOpen);
// 	toggleBtnsVisibility();
// 	showSlides();
// });

// hideBrandsBtn.addEventListener('click', () => {
// 	isSlidesOpen = !isSlidesOpen;
// 	console.log(isSlidesOpen);
// 	toggleBtnsVisibility();
// 	toggleSlidesVisibility();
// });

// // handle side menu
// openMenuBtn.addEventListener('click', () => {
// 	sideNav.classList.toggle('hidden');
// 	overlay.classList.toggle('hidden');
// });

// closeMenuBtn.addEventListener('click', () => {
// 	sideNav.classList.toggle('hidden');
// 	overlay.classList.toggle('hidden');
// });

// overlay.addEventListener('click', () => {
// 	sideNav.classList.toggle('hidden');
// 	overlay.classList.toggle('hidden');
// });

// document.addEventListener('keydown', (evt) => {
// 	if (evt.code === 'Escape') {
// 		sideNav.classList.toggle('hidden');
// 		overlay.classList.toggle('hidden');
// 	}
// });

// const mql = window.matchMedia('(min-width: 1120px)');
// mql.addEventListener('change', (evt) => {
// 	if (evt.matches) {
// 		sideNav.classList.remove('hidden');
// 	}
// });

// TABS
const tabsContainer = document.querySelector('.detailed-nav__list');
const tabHeaders = document.querySelectorAll('.detailed-nav__link');
const tabContent = document.querySelectorAll('.detailed-nav__info');

tabsContainer.addEventListener('click', (evt) => {
	evt.preventDefault();

	if (evt.target.classList.contains('detailed-nav__link')) {
		const activeTabHeader = evt.target;
		const contentId = evt.target.href.split('#')[1];
		const activeTabContent = Array.from(tabContent).find((el) =>
			el.classList.contains(contentId),
		);

		tabHeaders.forEach((el) => el.classList.remove('active'));
		tabContent.forEach((el) => el.classList.remove('active'));

		activeTabHeader.classList.add('active');
		activeTabContent.classList.add('active');
	}
});

const showMoreSlidesBtns = document.querySelectorAll('.slider__btn--show');
const hideSlidesBtns = document.querySelectorAll('.slider__btn--hide');
const sliders = document.querySelectorAll('.slider__wrapper');

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
