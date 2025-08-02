    // Init Isotope
    var iso = new Isotope('.hello', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
  
      // Filter buttons
      var filterButtons = document.querySelectorAll('button');
      filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          var filterValue = this.getAttribute('data-filter');
          iso.arrange({ filter: filterValue });
        });
      });