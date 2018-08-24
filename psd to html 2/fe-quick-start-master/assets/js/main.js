$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	// Team Animition
	$('.owl-carousel-team').owlCarousel({
	    loop:true,
	    margin:25,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	// Testimonial Animition
	$('.owl-carousel-testimonial').owlCarousel({
	    loop:true,
	    margin:25,
	    nav:false,
	    items:1,
	});


    //Magnific PopUp
		 $('#youtube-video').magnificPopup({
			 type:'iframe',
			 iframe: {
				 patterns: {
				    youtube: {
				      index: 'youtube.com/',
								id: 'v=',

				      src: 'http://www.youtube.com/embed/%id%?autoplay=1'}

				  },

				  srcAction: 'iframe_src',
				}
		 });

		 // skillbar

		 $('.skillbar').skillBars({
			  // options here
			});

		 // Counter

		 $('.counter-number').each(function () {
			    $(this).prop('Counter',0).animate({
			        Counter: $(this).text()
			    }, {
			        duration: 4000,
			        easing: 'swing',
			        step: function (now) {
			            $(this).text(Math.ceil(now));
			        }
			    });
			});

		 // Animition

		 var mixer = mixitup('.protfolio-content');

		 // Image MagicPopup

		 $('.image-link').magnificPopup({type:'image'});

}(jQuery));