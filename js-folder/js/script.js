// Isotope filter
var $grid = $('.filter-layout').isotope({
    // options
  });
  // filter items on button click
  $('.filter-menu').on( 'click', 'li', function() {

    $('li').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});