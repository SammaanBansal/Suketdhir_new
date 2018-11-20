<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;
global $product;
/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked wc_print_notices - 10
 */
do_action( 'woocommerce_before_single_product' );

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}
if ( ! function_exists( 'wc_get_gallery_image_html' ) ) {
	return;
}

$post_thumbnail_id = $product->get_image_id();

$attachment_ids = $product->get_gallery_attachment_ids();
$image_link = array();

foreach( $attachment_ids as $attachment_id ) {
    $image_link[] = wp_get_attachment_url( $attachment_id );
}

array_push($image_link, wp_get_attachment_url( $post_thumbnail_id ));
$count=1;
?>
<div class="SD-product-view">
	<?php 
		foreach($image_link as $url) :?>
			<img class="SD-product-view1 <?php echo ($count==1)?'SD-thumbnail-active' : '';?>" src="<?php echo $url?>" data-image-s="<?php echo $count;?>">
			<?php 
				$count++; 
		endforeach; ?>
</div>
<div class="SD-product-image pink-circle-parent-1">
	<?php $count_image=1;
		foreach($image_link as $url) :?>
		<img class="<?php echo ($count_image==1)?'SD-image-active' : '';?>" src="<?php echo $url?>" data-image-i="<?php echo $count_image;?>">
	<?php $count_image++; endforeach; ?>
    <div class="pink-circle pink-circle-parrot"></div>
</div>	

<div class="SD-product-description">
	<?php
		/**
		 * Hook: woocommerce_single_product_summary.
		 *
		 * @hooked woocommerce_template_single_title - 5
		 * @hooked woocommerce_template_single_rating - 10
		 * @hooked woocommerce_template_single_price - 10
		 * @hooked woocommerce_template_single_excerpt - 20
		 * @hooked woocommerce_template_single_add_to_cart - 30
		 * @hooked woocommerce_template_single_meta - 40
		 * @hooked woocommerce_template_single_sharing - 50
		 * @hooked WC_Structured_Data::generate_product_data() - 60
		 */
		do_action( 'woocommerce_single_product_summary' );
	?>
</div>


<?php do_action( 'woocommerce_after_single_product' ); ?>
