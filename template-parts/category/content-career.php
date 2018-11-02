<?php
/**
 * The template for displaying career page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Suketdhir
 * @since 1.0
 * @version 1.0
 */

?>
<?php 
  $args = array(
    'cat' => 27,
    'post_type' => 'post',
    'post_count' => -1,
    'post_status' => array( 'publish', 'private' ),
  );
  $count = 1;
  // the query
  $the_query = new WP_Query( $args ); 
?>
<section class="carrerSection flex">
    <div class="flex">
        <aside class="tabsCol">
            <nav>
                <ul class="nav nav-pills">
                	<?php if ( $the_query->have_posts() ) : $count = 1;?>
	                <!-- the loop -->
	                	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
	                	$post_id = get_the_ID();?>
                    		<li class="<?php if($count==1){echo "active";}else {echo $count;}?> bottomTwenty">
                    			<a data-toggle="pill" href="#post_<?php echo $post_id?>"><?php echo get_the_title();?></a></li>
		                <?php $count++; endwhile;
				    endif;?>
                </ul>
            </nav>
        </aside>

        <div class="tab-content SD-account-tab-content">
        	<?php if ( $the_query->have_posts() ) : $count=1;?>
                <!-- the loop -->
                <?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
                	$post_id = get_the_ID();?>
	            <div id="post_<?php echo $post_id;?>"  class="tab-pane fade in <?php if($count==1){echo "active";}?>">
	                <div class="SD-add-address-inner">
	                    <h4 class="accorItemHeading"><?php echo get_the_title();?></h4>
	                    <div class="TwentySixty jobDescription fourteenSansPro">
	                        <p class="">
	                            <?php echo get_the_content();?>
	                        </p>
	                    </div>
	                    <div>
	                        <div class="form">
	                           <?php echo do_shortcode('[contact-form-7 id="62" title="Career"]');?>
	                        </div>
	                    </div>
	                </div>
	            </div>
           
		        <?php $count++; endwhile;
		    endif;?>
        </div>
    </div>
    <div>
        <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/mango.svg" alt="">
    </div>
</section>