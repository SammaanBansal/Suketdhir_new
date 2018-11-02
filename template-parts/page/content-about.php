<?php
/**
 * Displays content for about Us page
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?>

<div class="videoContainer">
	<?php if(get_field('video_link')) :?>
	    <div>
	        <video class="playVidGain" src="<?php echo get_field('video_link');?>" poster="<?php if(get_field('video_poster')){echo get_field('video_poster');}?>"></video>
	    </div>
	    <div class="videoPlayCon">
	        <img class="videPlay" src="<?php echo get_bloginfo('template_directory');?>/assets/icons/play.svg" alt="">
	    </div>
	<?php endif;?>
</div>

<div class="flex aboutLarge">
    <div class="fiftyPercent aboutGrayContainer">
        <div class="fourteenSansPro grayCenterContent">
            <?php echo get_the_content();?>
        </div>
    </div>
    <div class="fiftyPercent">
    	<?php if(has_post_thumbnail() ):?>
        <img class="widthFull eightHundredImg" src="<?php echo get_the_post_thumbnail_url();?>" alt="">
    <?php endif;?>
    </div>
</div>

<?php 
  $args = array(
    'cat' => 28, // SIGNATURE CHARACTERISTICS
    'post_type' => 'post',
    'post_count' => -1,
    'post_status' => array( 'publish', 'private' ),
  );
  // the query
  $the_query = new WP_Query( $args ); 
?>
<div class="abouWhiteContainer">
    <h4><?php echo get_cat_name(28);?></h4>
</div>

<div class="SD-aboutus-row4">
    <div class="carousel slide" id="theCarousel" data-interval="false" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
        	<?php if ( $the_query->have_posts() ) : $count = 1;?>
	                <!-- the loop -->
	                	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
	                	$post_id = get_the_ID();?>
            <div class="item <?php if($count==1){echo "active";}?>">
                <div class="flex">
                    <div class="fiftyPercent">
                    	<?php if(has_post_thumbnail() ):?>
					        <img class="img-responsive widthFull fiveThirty" src="<?php echo get_the_post_thumbnail_url();?>" alt="">
					    <?php endif;?>
                       <!--  <img class="img-responsive widthFull fiveThirty" src="<?php echo get_bloginfo('template_directory');?>/assets/images/fagoted-seams.png"> -->
                    </div>
                    <div class="fiftyPercent flex itemCenter grauBack">
                        <div class="grayCenterContent">
                        	<h3><?php echo get_the_title();?></h3>
                            <?php echo get_the_content();?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="item">
                <div class="flex">
                    <div class="fiftyPercent">
                        <img class="img-responsive widthFull fiveThirty" src="<?php echo get_bloginfo('template_directory');?>/assets/images/mutli-colour-buttons.png">
                    </div>
                    <div class="fiftyPercent flex itemCenter grauBack">
                        <div class="grayCenterContent slideHeading">
                            <h3>Fagoted Seams</h3>
                            <p>Every nuance of a SUKETDHIR creation is a testament to these five hallowed Fs. Of course, masterful detailing, clever design and a touch of nazakat are added—all to create a versatile product that IS a statement.</p>
                        </div>
                    </div>
                </div>
            </div> -->
             <?php $count++; endwhile;
				    endif;?>
        </div>
        <a class="left carousel-control carousel-left-gradient" data-target="#theCarousel" data-slide="prev"></a>
        <a class="right carousel-control righCarousel" data-target="#theCarousel" data-slide="next"></a>
    </div>
</div>
<?php 
  $args = array(
    'cat' => 29, // PRESS & PUBLICATION
    'post_type' => 'post',
    'post_count' => -1,
    'post_status' => array( 'publish', 'private' ),
  );
  // the query
  $the_query = new WP_Query( $args ); 
?>
<div>
    <div class="abouWhiteContainer">
        <h4><?php echo get_cat_name(29);?></h4>
    </div>
    <div class="gridThree">
    	<?php if ( $the_query->have_posts() ) : ?>
    	<!-- the loop -->
        	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); 
        	$post_id = get_the_ID();?>
        		<div>
		            <div class="heightFourhundred">
		                <?php if(has_post_thumbnail() ):?>
					        <img  src="<?php echo get_the_post_thumbnail_url();?>" alt="">
					    <?php endif;?>
		            </div>
		            <div class="gridsContent">
		                <p><!--05.06.18-->
		                	<?php echo get_the_date("d.m.y");?></p>
		                <h4><?php echo get_the_title();?></h4>
		                <p>
		                    <a href="<?php echo get_the_permalink();?>">Read full article</a>
		                </p>
		            </div>
		        </div>
        	<?php 
        	 endwhile;
	    		endif;
	    	?>
        

        <!-- <div>
            <div class="heightFourhundred">
                <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/publication1.png" alt="">
            </div>
            <div class="gridsContent">
                <p>05.06.18</p>
                <h4>the new your times</h4>
                <p>
                    <a href="">Read full article</a>
                </p>
            </div>
        </div>

        <div>
            <div class="heightFourhundred">
                <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/publication1.png" alt="">
            </div>
            <div class="gridsContent">
                <p>05.06.18</p>
                <h4>the new your times</h4>
                <p>
                    <a href="">Read full article</a>
                </p>
            </div>
        </div> -->
    </div>

</div>