$(function() {

//hamburger menu
	var $hamburger = $(".hamburger");
	var $navMenu = $('.header-menu');
	$hamburger.on("click", function(e) {
	  $hamburger.toggleClass("is-active");
	  $navMenu.toggleClass("nav-active");
	});


//owl карусель	1
	$('.works-carousel').owlCarousel({
		dots: true,
		// loop: true,
		nav: true,
		margin: 30,
		smartSpeed: 500,
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});	

//owl карусель	2
	$('.testimonials-slider').owlCarousel({
		dots: true,
		smartSpeed: 500,
		items: 1
	});	

//owl карусель	3
	$('.clients-carousel').owlCarousel({
		dots: false,
		margin: 30,				
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2
			},
			400: {
				items: 3
			},
			600: {
				items: 4
			},
			800: {
				items: 5
			},
			1100: {
				items: 6
			}
		}
	});

});
