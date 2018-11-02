<?php
/**
 * Displays Footer navigation
 *
 * @package WordPress
 * @subpackage Suketdhir
 * @since 1.0
 * @version 1.2
 */

?>

<?php 

	$defaults = array(
	  'theme_location'  => '',
	  'menu'            => '', 
	  'container'       => '', 
	  'container_class' => '', 
	  'container_id'    => '',
	  'menu_class'      => 'menus', 
	  'menu_id'         => '16',
	  'echo'            => true,
	  'fallback_cb'     => 'wp_page_menu',
	  'before'          => '',
	  'after'           => '',
	  'link_before'     => '',
	  'link_after'      => '',
	  'items_wrap'      => '<ul class="SD-footer2 col-sm-6">%3$s</ul>',
	  'depth'           => 0,
	  
	);

	echo wp_nav_menu( $defaults ); 

?>