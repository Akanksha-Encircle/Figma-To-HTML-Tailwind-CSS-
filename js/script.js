// JavaScript Document
(function($){
	$(document).ready(function() {

        /* navigation */
		// $(".navbar-toggler").click(function () {
		// 	$(this).toggleClass("open");
		// 	$("html").toggleClass("overflow-hidden");
		// });

		// $(".navbar-nav .nav-link").click(function(){
		// 	$(".navbar-toggler").removeClass("open");
		// 	$("html").removeClass("overflow-hidden");
		// 	$(".navbar-collapse").collapse("hide");
		// });
		/* navigation */

        $('#navbar-toggler').on('click', function () {
            $('#navbar-content').removeClass('translate-x-full');
            $("html").addClass("overflow-hidden");
        });
    
        // Close button for hiding the navbar
        $('#navbar-close').on('click', function () {
            $('#navbar-content').addClass('translate-x-full');
            $("html").removeClass("overflow-hidden");
        });

		var swiper = new Swiper(".styleSwiper", {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				500: {
				  slidesPerView: 2,
				  spaceBetween: 20,
				},
				1024: {
				  slidesPerView: 3,
				  spaceBetween: 20,
				},
				1280: {
				  slidesPerView: 4,
				  spaceBetween: 20,
				},
			},
		});

		AOS.init();

		/* lazyload */
		var myLazyLoad = new LazyLoad();
		myLazyLoad.update();
		/* lazyload */

		/* OFI Browser */
		objectFitImages();
		/* OFI Browser */
	});
})(jQuery);