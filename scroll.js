// ===== Back to Top Button ==== 
jQuery(document).ready(function($){
   	 //grab the "back to top" link
	$back_to_top = $('.topButton');

	$(window).scroll(function(){
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled to bottom less than 50px
	        $('.topButton').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('.topButton').fadeOut(200);   // Else fade out the arrow
	    }
    });

    $back_to_top.on('click', function(event){     // When arrow is clicked
	    event.preventDefault();
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
});