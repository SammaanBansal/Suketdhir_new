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
?>

<div class="flex aboutLarge">
    <div class="fiftyPercent aboutGrayContainer collectionGray">
        <div class="fourteenSansPro grayCenterContent">
            <?php echo category_description(); 
            $category = get_queried_object();
			?>
        </div>
    </div>

    <div class="videoContainer fiftyPercent">
    	<?php if(get_field('video_link',$category)) :?>
	        <div>
	            <video class="playVidGain largerVideoPoster" src="<?php echo get_field('video_link',$category);?>" poster="<?php if(get_field('video_poster',$category)){echo get_field('video_poster',$category);}?>"></video>
	        </div>
	        <div class="videoPlayCon">
	            <img class="videPlay" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/play.svg" alt="">
	        </div>
	    <?php endif;?>
    </div>
</div>

<div class="flex aboutLarge">
	
	<?php if ( get_field('flip_code',$category)) 

		{ 
			$shortcode = get_field("flip_code", $category);
			echo do_shortcode($shortcode);

		} 
	?> 
   <!--  <div class="fiftyPercent">
        <img class="widthFull eightHundredImg" src="<?php echo get_bloginfo('template_directory');?>/assets/images/colletionL2.png" alt="">
    </div>
    <div class="fiftyPercent">
        <img class="widthFull eightHundredImg" src="<?php echo get_bloginfo('template_directory');?>/assets/images/colletionL1.png" alt="">
    </div> -->
</div>

<div>
    <div class="gridThree gridFour">
    	<?php 
		  $args = array(
		    'cat' => $category->term_id, // collections
		    'post_type' => 'post',
		    'post_count' => -1,
		    'post_status' => array( 'publish', 'private' ),
		  );
		  // the query
		  $the_query = new WP_Query( $args ); 
		?>

		<?php if ( $the_query->have_posts() ) : $count = 1;?>
            <!-- the loop -->
            	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
            	$post_id = get_the_ID();?>
		        <div class="hoveContainer">
		            <div class="heightFourhundred">
		            	<?php if(has_post_thumbnail() ):?>
					        <img src="<?php echo get_the_post_thumbnail_url();?>" alt="">
					    <?php endif;?>
		              
		            </div>
		            <div class="gridsContent hovContent">
		                <!-- <a href=""> -->
		                    <p><?php the_title();?></p>
		                    <!-- <p>
		                        SHOP THE LOOK
		                    </p> -->
		               <!--  </a> -->
		            </div>
		            <div class="heart">
		                <div class="unselected">
		                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22" viewBox="0 0 25 22">
		                            <defs>
		                                <path id="a" d="M0 0h24.777v21.545H0z"/>
		                            </defs>
		                            <g fill="none" fill-rule="evenodd">
		                                <mask id="b" fill="#fff">
		                                    <use xlink:href="#a"/>
		                                </mask>
		                                <path fill="#636363" d="M1.794 1.837c-2.393 2.45-2.39 6.391 0 8.843l10.588 10.865 10.6-10.853c2.394-2.449 2.394-6.393 0-8.843a5.996 5.996 0 0 0-8.637 0l-1.95 1.998-1.963-2.01a5.996 5.996 0 0 0-8.638 0" mask="url(#b)"/>
		                            </g>
		                        </svg>

		                </div>
		            </div>
		        </div>
		<?php  endwhile;
		endif;?>

        
    </div>

    <div class="topEightPix">
        <a href="<?php echo get_bloginfo('url');?>/shop"><button class="yellowBtn">Shop by category</button></a>
    </div>
</div>