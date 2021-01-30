var hero_swiper = new Swiper('#hero_swiper', {
    slidesPerView: 1,

    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});



var galery_swiper = new Swiper('#galery_swiper', {
    // Optional parameters 

    slideClass: ('swiper-slide'),
    
    slidesPerView: 1,
    slidesPercolumn: 2,
    spaceBetween: 50,
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
var publication_swiper = new Swiper('#publication_swiper', {
    // Optional parameters 

    slideClass: ('swiper-slide'),
    
    slidesPerView: 1,
    slidesPercolumn: 2,
    spaceBetween: 50,
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
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.pagination3.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },

    speed: 600,


});

                
