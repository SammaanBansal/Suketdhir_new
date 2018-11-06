<?php
/**
 * Displays content for Cuatomer Care page
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?>

<section class="footerSection flex">
    <div class="tabsTitle panel-group deskAccordion" id="accordionMenu" role="tablist" aria-multiselectable="true">
        <h1><?php the_title();?></h1>
        <?php 
            $categories=get_categories(
                array( 'parent' => 35 )
            );
            $faq_cat_count =1;
        ?>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <?php echo get_cat_name( 35 ); ?>
                  </a>
                </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="sixtyFourty grayTabs faqHead">
                    <!-- <h1>FAQ</h1> -->
                    <?php foreach($categories as $faq_cat):?>
                    <div>
                        <h2><span><?php echo $faq_cat_count;?></span><?php echo get_cat_name($faq_cat->term_id); ?></h2>
                        <div class="accorContainer notCromp">
                            <?php 
                              $args = array(
                                'cat' => $faq_cat->term_id,
                                'post_type' => 'post',
                                'post_count' => -1,
                                'post_status' => array( 'publish', 'private' ),
                              );
                              // the query
                              $the_query = new WP_Query( $args ); 
                               if ( $the_query->have_posts() ) : $faq_count = 1;
                    
                                 while ( $the_query->have_posts() ) : $the_query->the_post(); 
                                    ?>
                        
                                        <div class="accorHeading removeCross bottomfourty">
                                            <span><?php echo $faq_cat_count. "-". $faq_count.".";?></span> <span><?php echo get_the_title();?></span>
                                            <img class="plus imgClick" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/down.svg" alt="">
                                            <img class="cross imgClick" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/up.svg" alt="">
                                            <div class="accorcontent fontFourteen">
                                                <p>
                                                    <?php echo get_the_content();?>
                                                </p>
                                            </div>
                                        </div>
                                <?php $faq_count++; endwhile;
                                endif;?>
                        </div>
                    </div>
                <?php $faq_cat_count++; endforeach;?>
                </div>
            </div>
        </div>
        <?php $post_20 = get_post( 20 ); //Shipping &amp; Returns?>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <?php echo $post_20->post_title;?>
                  </a>
                </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="sixtyFourty grayTabs shipping">
                    <!-- <h1>Shipping &amp; Returns</h1> -->
                    <?php echo $post_20->post_content;?>
                </div>
            </div>
        </div>
         <?php $post_22 = get_post( 22 ); //Terms of Use?>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <?php echo $post_22->post_title;?>
                  </a>
                </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse threeAcor" role="tabpanel" aria-labelledby="headingThree">
                <div class="sixtyFourty grayTabs">
                    <!-- <h1>Terms of Use</h1> -->
                   <?php echo $post_22->post_content;?>
                </div>
            </div>
        </div>

        <?php $post_3= get_post( 3 ); //Privacy Policy?>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingFour">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <?php echo $post_3->post_title;?>
                  </a>
                </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                <div class="sixtyFourty grayTabs privacyPol">
                    <!-- <h1>Privacy Policy</h1> -->
                    <?php echo $post_3->post_content;?>

                </div>
            </div>
        </div>
    </div>
</section>