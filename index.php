<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

get_header('home'); ?>

<div class="homepage-image-scroller content-container scroll-hide" >
    <div class="scrolled-content" >
        <div class="scroll-slide" id="slide1">
            <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide1.jpg">
        </div>
        <div class="scroll-slide fixed-text" id="slide2">
            <h3>A/W 2018</h3>
            <p>Fluid fabrics transform into versatile outfits this season.</p>
            <p>On board are playful yet ethereal bombers, blazers, and gilets that thrive on layering. Urbane bandhgala jackets—a testament to refined tailoring of an era gone by—also make an appearance. Exquisite weaves like brocade, Duchess silk, and mulmul shed stereotypical garbs to feature in reinvented silhouettes crafted for work, play, and sleep. Reversible creations offer instant style updates; while relaxed yet elegant fits in shirts, trousers, and kurtas are tailored for comfort. At SUKETDHIR, this Autumn-Winter is all about marrying function with nazakat, in a never-seen before avatar.</p>
        </div>
        <div class="scroll-slide" id="slide3">
            <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide2.jpg">
        </div>
        <div class="scroll-slide" id="slide4">
            <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide3.jpg">
        </div>
        <div class="scroll-slide" id="slide5">
            <img src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide5.jpg">
        </div>
        <div class="scroll-slide fixed-text" id="slide6">
            <img class="bg-image-icon" src="<?php echo get_bloginfo('template_directory');?>/assets/images/bg-mango.svg">
            <p> Take a turn at the roundabout, Along the stairs, by the spout To this place… a place of clouts </p>
        </div>
        <div class="scroll-slide clear-float" id="slide7">
            <img class="slide-7-1" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide6.jpg">
            <img class="slide-7-2" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide7.jpg">
            <img class="slide-7-3" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide8.jpg">
        </div>
        <div class="scroll-slide" id="slide8">
            <img class="slide-8" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide9.jpg">
        </div>
        <div class="scroll-slide fixed-text" id="slide9">
            <p>Three steps up, two steps down The destination is journey bound </p>
        </div>
        <div class="scroll-slide" id="slide10">
            <img class="slide-10" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide10.jpg">
        </div>
        <div class="scroll-slide fixed-text" id="slide11">
            <img class="slide-11-2" src="<?php echo get_bloginfo('template_directory');?>/assets/images/bg-parrot.svg">
            <img class="slide-11-1" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide11.jpg">
        </div>
        <div class="scroll-slide" id="slide12">
            <img class="slide-12" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide12.jpg">
        </div>
        <div class="scroll-slide" id="slide13">
            <img class="slide-13-1" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide13-1.jpg">
            <img class="slide-13-2" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide13-2.jpg">
            <img class="slide-13-3" src="<?php echo get_bloginfo('template_directory');?>/assets/images/cloud-6.svg">
        </div>
        <div class="scroll-slide fixed-text" id="slide14">
            <p>Three steps up, two steps down The destination is journey bound </p>
            <img class="slide-14" src="<?php echo get_bloginfo('template_directory');?>/assets/images/clouds.svg">
        </div>
        <div class="scroll-slide clear-float" id="slide15">
            <img class="slide-15-1" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide-15-1.jpg">
            <img class="slide-15-2" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide-15-2.jpg">
            <img class="slide-15-3" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide-15-3.jpg">
        </div>
        <div class="scroll-slide" id="slide16">
            <img class="slide-16" src="<?php echo get_bloginfo('template_directory');?>/assets/images/slide-16.jpg">
        </div>
    </div>
</div>
<?php get_footer("Home");
