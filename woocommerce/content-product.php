<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
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

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>

<a href="<?php echo get_the_permalink();?>" class="whiteBack shopCol">
    <div class="imgThreeSeventyFour">
       <!--  <img class="widthFull" src="./assets/images/VD_Direction1 0.5_Placeholders_Men-37.png" alt=""> -->
        <?php $post_thumbnail_id = $product->get_image_id(); ?>

        <img class="widthFull" src="<?php echo wp_get_attachment_url( $post_thumbnail_id );?>" alt="">
    </div>
    <div class="heart">
        <div class="unselected">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22" viewBox="0 0 25 22">
                <defs>
                    <path id="a" d="M0 0h24.777v21.545H0z"></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <mask id="b" fill="#fff">
                        <use xlink:href="#a"></use>
                    </mask>
                    <path fill="#636363" d="M1.794 1.837c-2.393 2.45-2.39 6.391 0 8.843l10.588 10.865 10.6-10.853c2.394-2.449 2.394-6.393 0-8.843a5.996 5.996 0 0 0-8.637 0l-1.95 1.998-1.963-2.01a5.996 5.996 0 0 0-8.638 0" mask="url(#b)"></path>
                </g>
            </svg>
        </div>
    </div>
    <div class="shopHovContent hovContent">
        <h4><?php the_title();?></h4>
        <h5>
            <?php echo $product->get_price_html(); ?>
        </h5>
    </div>
</a>

