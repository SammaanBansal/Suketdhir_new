<?php
/**
 * The template for displaying categories
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

get_header(); 

$category = get_queried_object();
//$all_cat = explode(",", get_category_parents( $category->term_id,'',',' ));
?>
<div class="content-container">
<?php
	if ( have_posts() ) : the_post();

		switch($category->term_id) {
			case 27 :
			get_template_part( 'template-parts/category/content', 'career' );
			break;

			default :
			get_template_part( 'template-parts/category/content', 'collections' );
			break;
		}

	endif; // End of the loop.
?>
</div>
<?php get_footer();
