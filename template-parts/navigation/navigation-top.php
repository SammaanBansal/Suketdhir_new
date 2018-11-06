<?php
/**
 * Displays top navigation
 *
 * @package WordPress
 * @subpackage Suketdhir
 * @since 1.0
 * @version 1.2
 */

?>
<?php 
$walker = new my_nav_walker;
$defaults = array(
  'theme_location'  => 'top',
  'menu'            => '', 
  'container'       => '', 
  'container_class' => '', 
  'container_id'    => '',
  'menu_class'      => 'menus', 
  'menu_id'         => '',
  'echo'            => true,
  'fallback_cb'     => 'wp_page_menu',
  'before'          => '',
  'after'           => '',
  'link_before'     => '',
  'link_after'      => '',
  'items_wrap'      => '<ul class="SD-nav collapse navbar-collapse" id="SD-nav" aria-expanded="false">%3$s</ul>',
  'depth'           => 0,
  'walker'          => $walker
);
?>


<?php echo wp_nav_menu( $defaults ); ?>