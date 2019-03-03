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

	function fix_style_preload() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			$('link').each(() => {
				this.rel = this.as == 'style' ? 'stylesheet' : this.rel;
			});
		}
	}
	
	fix_style_preload();
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);