
$('.carousel-one').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1500:{
          items:2
      }
  }
})

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
