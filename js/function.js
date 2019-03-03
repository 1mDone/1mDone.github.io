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
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);