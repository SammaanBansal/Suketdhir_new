<?php
/**
 * Displays content for contact Us page
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?>

<div class="aboutContainer flex">
    <div class="fiftyPercent abourGraySection">
        <div class="accorContainer">
            <div class="accorHeading removeCross bottomfourty">
                <img class="plus imgClick" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/VD_Icons_resize-19.png">
                <img class="cross imgClick" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/VD_Icons_resize-40.png" alt="">
                <span> Studio </span>
                <div class="accorcontent topTwenty fontFourteen">
                    <?php echo get_field('studio');?>
                </div>
            </div>

            <div class="accorHeading removeCross bottomfourty">
                <img class="plus imgClick" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/VD_Icons_resize-19.png">
                <img class="cross imgClick" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/VD_Icons_resize-40.png" alt="">
                <span> Press </span>
                <div class="accorcontent topTwenty fontFourteen">
                    <?php echo get_field('press');?>
                </div>
            </div>

        </div>
    </div>
    <div class="fiftyPercent mapContainer ">
        <div class="map mapHeight ">
            <a href="https://www.google.com/maps/place/SUKETDHIR/@28.5260417,77.1886103,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1e011d270649:0x67b9188bbd8d5589!8m2!3d28.526037!4d77.190799 " target="blank ">
                <img class="mapImg " src="<?php echo get_bloginfo('template_directory');?>/assets/images/suketMap.png " alt=" ">
            </a>
        </div>
    </div>
</div>