

$('.carousel-two').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
})



