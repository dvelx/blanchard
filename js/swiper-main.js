var hero_swiper = new Swiper('#hero_swiper', {
	slidesPerView: 'auto',    
	fadeEffect: {
		crossFade: true
	  },
	autoplay: {
		delay: 6000,
	},
	effect: 'fade',
	speed: 3000,
});



var gallery_swiper = new Swiper('#gallery_swiper', {
	// Optional parameters 

	slideClass: ('swiper-slide'),
	
	slidesPerView: 3,
	slidesPerColumn: 2,
	spaceBetween: 50,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 6000,
	},

	// breakpoints: {
	//     1024: {
	//         slidesPerView: 2,
	//         spaceBetween: 35,
	//     },
	// },

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		},
   
	speed: 600,


});
var publication_swiper = new Swiper('#publication_swiper', {
	// Optional parameters 

	slideClass: ('swiper-slide'),
	
	slidesPerView: 3,
	slidesPercolumn: 3,
	spaceBetween: 50,

	// breakpoints: {
	//     "@0.75": {
	//         slidesPerView: 2,
	//         spaceBetween: 35,
	//     },
	// },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		},
   
	speed: 600,


});
var project_swiper = new Swiper('#project-swiper', {
	// Optional parameters 

	slideClass: ('swiper-slide'),
	
	slidesPerView: 3,
	slidesPercolumn: 1,
	spaceBetween: 40,
	navigation: {
		nextEl: '.button3-next.swiper-button-next',
		prevEl: '.button3-prev.swiper-button-prev',
	},
	// autoplay: {
	//     delay: 6000,
	//     disableOnInteraction: false,
	// },

	// breakpoints: {
	//     "@0.5": {
	//         slidesPerView: 2,
	//         spaceBetween: 50,
	//     },
	// },

	pagination: {
		el: '.pagination3.swiper-pagination',
		clickable: true,
		type: 'fraction',
	},

	speed: 600,


});


				
