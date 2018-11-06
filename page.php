<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>
<div class="content-container">
	<?php
	// Getting the page ID.
	$page_id = get_the_ID();

	while ( have_posts() ) : the_post();

		switch($page_id) {
			case 24 :
			get_template_part( 'template-parts/page/content', 'contact' );
			break;
			
			case 29 :
			get_template_part( 'template-parts/page/content', 'about' );
			break;

			case 6 :
			get_template_part( 'template-parts/page/content', 'shop' );
			break;

			case 139 :
			get_template_part( 'template-parts/page/content', 'customercare' );
			break;

			default :
			get_template_part( 'template-parts/page/content', 'page' );
			break;
		}

		
	endwhile; // End of the loop.
	?>

			
</div>
<?php get_footer();
