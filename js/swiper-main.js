
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters 

    slideClass: ('swiper-slide'),
    
    slidesPerView: 1,
    slidesPercolumn: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        },
   
    speed: 600,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

                