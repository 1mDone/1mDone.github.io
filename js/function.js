(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.load(function() {
		$(".preloader").fadeOut(400);
    });

	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* Testimonial Swiper Slider */
	var swiper = new Swiper('.testimonial-slider', {
		grabCursor: true,
		autoplay: true,
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.testimonial-button-next',
			prevEl: '.testimonial-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 1
				
			}
		}
	});

	/* SmoothScroll init  */
	var scroll = new SmoothScroll('a[href*="#"]');

	/* Animate with wow js */
    new WOW({mobile:false}).init(); 

    /* quantity */
    window.inputNumber = function(el) {

    	const pricePerKg = 750;

    	var totalEl = $('.price-tag');

	    var min = el.attr('min') || false;
	    var max = el.attr('max') || false;

	    var els = {};

	    els.dec = el.prev();
	    els.inc = el.next();

	    el.each(function() {
	      init($(this));
	    });

	    function init(el) {

	      els.dec.on('click', decrement);
	      els.inc.on('click', increment);

	      function decrement() {
	        var value = el[0].value;
	        value--;
	        if(!min || value >= min) {
	          el[0].value = value;
	          totalEl[0].innerText = el[0].value * pricePerKg + " ₽";
	        }
	      }

	      function increment() {
	        var value = el[0].value;
	        value++;
	        if(!max || value <= max) {
	          el[0].value = value++ ;
	          totalEl[0].innerText = el[0].value * pricePerKg + " ₽";
	        }
	      }
	    }
  }
	
})(jQuery);

inputNumber($('.input-number'));

