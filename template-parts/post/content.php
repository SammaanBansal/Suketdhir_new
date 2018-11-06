<?php
/**
 * Displays content for page
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?>

<section class="carrerSection flex">
    <div class="flex">
        <div class="tab-content SD-account-tab-content">
            <div id="sdprofile" class="tab-pane fade in active">
                <div class="SD-add-address-inner">
                    <h4 class="accorItemHeading"><?php the_title();?></h4>
                    <div class="TwentySixty jobDescription fourteenSansPro">
                       <?php the_content();?>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    <div>
        <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/mango.svg" alt="">
    </div>
</section>