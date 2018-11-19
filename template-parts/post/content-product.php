<?php
/**
 * Displays content for product
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?>
<div class="SD-product">
    <div class="SD-product-la">
        <a href="#"><img src="<?php echo get_bloginfo('template_directory');?>/assets/icons/VD_Icons-20.png"></a>
    </div>
    <?php the_content();?>
</div>

<?php
    /**
     * Hook: woocommerce_after_single_product_summary.
     *
     * @hooked woocommerce_output_product_data_tabs - 10
     * @hooked woocommerce_upsell_display - 15
     * @hooked woocommerce_output_related_products - 20
     */
    do_action( 'woocommerce_after_single_product_summary' );
?>