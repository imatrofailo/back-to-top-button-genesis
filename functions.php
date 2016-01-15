<?php //* DON'T COPY THIS <?php LINE OF CODE!!!

//* Enqueue Back to Top Button script
add_action( 'wp_enqueue_scripts', 'back_to_top_script' );
function back_to_top_script() {
	wp_enqueue_script( 'scroll', get_stylesheet_directory_uri() . '/js/scroll.js', array( 'jquery' ), '', true );
}

// Add To Top button
add_action( 'genesis_before', 'genesis_to_top');
	function genesis_to_top() {
	 echo '<a href="#" class="topButton">&uarr;</a>';
}