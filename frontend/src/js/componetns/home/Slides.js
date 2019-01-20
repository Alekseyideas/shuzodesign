import Swiper from 'swiper';

export const HomeSlides = () => {
	new Swiper('.swiper-container', {
		loop: true,
		autoplay: {
			delay: 8000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 1
		},
		speed: 1500,
	});
};