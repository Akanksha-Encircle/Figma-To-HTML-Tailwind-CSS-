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

		/* lazyload */
		var myLazyLoad = new LazyLoad();
		myLazyLoad.update();
		/* lazyload */

		/* OFI Browser */
		objectFitImages();
		/* OFI Browser */
	});
})(jQuery);