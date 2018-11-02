<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.2
 */

?>
	<footer class="col-sm-12">
        <div class="SD-icon-hat">
        </div>
        <div class="SD-footer float-clear">
            <p class="SD-footer0 col-sm-1"></p>
            <p class="SD-footer1 col-sm-2 text-right">
                <span>&copy;2017</span>
                SUKET DHIR
            </p>
           
            <?php get_template_part( 'template-parts/navigation/navigation', 'bottom' ); ?>

            <?php if ( is_active_sidebar( 'sidebar-2' ) ) : ?>
               <ul class="SD-footer3 col-sm-2">
                    <?php dynamic_sidebar( 'sidebar-2' ); ?>
                </ul>
            <?php endif; ?>
            
        </div>
        </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js "></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js "></script>
    <script src="<?php echo get_bloginfo('template_directory');?>/assets/js/custom.js"></script>
		
<?php wp_footer(); ?>

</body>
</html>
