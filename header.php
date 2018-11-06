<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link href="https://fonts.googleapis.com/css?family=Cormorant:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional theme -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="<?php echo get_bloginfo('template_directory');?>/assets/js/masonry.pkgd.min.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_directory');?>/assets/css/style.css">

<?php wp_head(); ?>
</head>
<body scroll="no">
    <header class="SD-header">
      <div class="float-clear">
        <div class="SD-name">
            <a role="button" class="SD-gotohome" href="index.html">
                <img class="SD-logo" src="<?php echo get_bloginfo('template_directory');?>/assets/images/landing-header-logo.svg">
            </a>
            <a href="#" style="float:right" data-toggle="collapse" data-target="#SD-nav" class="visible-xs">
                <div class="SD-icon-hat">
                </div>
            </a>
        </div>
        <!-- <ul class="SD-nav collapse navbar-collapse" id="SD-nav" aria-expanded="false">
            <li>
                <a role="button" class="SD-clothing" href="clothing.html">
                SHOP
                </a>
                <div class="header-submenu">
                    <ul>
                        <li><a href="#Shirts">Shirts</a></li>
                        <li><a href="#Jackets">Jackets</a></li>
                        <li><a href="#Coats">Coats</a></li>
                        <li><a href="#Kurtas">Kurtas</a></li>
                        <li><a href="#Pants">Pants</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a role="button" class="SD-collections" href="collections.html" >
                    COLLECTIONS
                </a>
                <div class="header-submenu">
                    <ul>
                        <li><a href="#SS2016">SS 2016</a></li>
                        <li><a href="#AW2016">AW 2016</a></li>
                        <li><a href="#SS2016">SS 2016</a></li>
                        <li><a href="#AW2017">AW2017</a></li>
                        <li><a href="#Resort2017">Resort 2017</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a role="button" class="SD-nav-stories" href="stories.html">
                STORIES
            </a>
            </li>
            <li>
                <a role="button" class="SD-about" href="aboutus.html">
                ABOUT
            </a>
            </li>
            <li>
                <a role="button" class="SD-contact" href="contact.html">
                CONTACT
            </a>
            </li>
            <li>
                <a role="button" class="SD-account" href="account_signup.html">
                MY ACCOUNT
            </a>
            </li>
            <li class="wardrobe-btn">
                <a onclick="toggleWardrobe()">
                    <img class="wardrobeIcon" src="assets/icons/wardrobe.svg" alt="">
                </a>

            </li>
        </ul> -->
        <?php if ( has_nav_menu( 'top' ) ) : ?>
    
        <?php get_template_part( 'template-parts/navigation/navigation', 'top' ); ?>
               
        <?php endif; ?>
        </div>
        <div class="SD-wardrobe-container " onblur="hideWardrobe() " tabindex="0 " autofocus style="z-index:-1;">
            <div class="SD-wardrobe-header ">
                Wardrobe
            </div>
            <ul class="SD-wardrobe-items ">
                <li class="SD-wardrobe-item ">
                    <div class="SD-wardrobe-item-pic">
                        <img src="assets/images/men_images/Men4.png " alt=" ">
                        <div class="wardrobe-heart">
                            <i class="ion ion-heart icon-heart"></i>
                        </div>
                        <div class="pink-circle-wardrobe"></div>
                    </div>
                    <div class="SD-wardrobe-item-info ">
                        <h4>Black Hemmed Pants</h4>
                        <p>$350</p>
                        <p>Size:
                            <select name="" id="#SD-sizeselect">
                                <option value=""><span>M</span></option>
                                <option value=""><span>L</span></option>
                                <option value=""><span>XL</span></option>
                            </select>
                        </p>
                        <p>Quantity:
                            <select name="" id="#SD-qtyselect">
                                <option value=""><span>1</span></option>
                                <option value=""><span>2</span></option>
                                <option value=""><span>3</span></option>
                            </select>
                        </p>
                        <a href=" ">Remove from wardrobe</a>
                    </div>
                </li>
                <li class="SD-wardrobe-item ">
                    <div class="SD-wardrobe-item-pic ">
                        <img src="assets/images/men_images/Men2.png " alt=" ">
                        <div class="wardrobe-heart">
                            <i class="ion ion-heart icon-heart"></i>
                        </div>
                        <div class="pink-circle-wardrobe"></div>
                    </div>
                    <div class="SD-wardrobe-item-info ">
                        <h4>Black Hemmed Pants</h4>
                        <p>$350</p>
                        <p>Size:
                            <select name="" id="#SD-sizeselect">
                                <option value=""><span>M</span></option>
                                <option value=""><span>L</span></option>
                                <option value=""><span>XL</span></option>
                            </select>
                        </p>
                        <p>Quantity:
                            <select name="" id="#SD-qtyselect">
                                <option value=""><span>1</span></option>
                                <option value=""><span>2</span></option>
                                <option value=""><span>3</span></option>
                            </select>
                        </p>
                        <a href=" ">Remove from wardrobe</a>
                    </div>
                </li>
                <li class="SD-wardrobe-item">
                    <div class="SD-wardrobe-item-pic">
                        <img src="assets/images/men_images/Men6.png " alt="">
                        <div class="wardrobe-heart">
                            <i class="ion ion-heart icon-heart"></i>
                        </div>
                        <div class="pink-circle-wardrobe"></div>
                    </div>
                    <div class="SD-wardrobe-item-info ">
                        <h4>Black Hemmed Pants</h4>
                        <p>$350</p>
                        <p>Size:
                            <select name="" id="#SD-sizeselect">
                                <option value=""><span>M</span></option>
                                <option value=""><span>L</span></option>
                                <option value=""><span>XL</span></option>
                            </select>
                        </p>
                        <p>Quantity:
                            <select name="" id="#SD-qtyselect">
                                <option value=""><span>1</span></option>
                                <option value=""><span>2</span></option>
                                <option value=""><span>3</span></option>
                            </select>
                        </p>
                        <a href=" ">Remove from wardrobe</a>
                    </div>
                </li>
                <li class="SD-wardrobe-item ">
                    <div class="SD-wardrobe-item-pic ">
                        <img src="assets/images/men_images/Men3.png " alt=" ">
                        <div class="wardrobe-heart">
                            <i class="ion ion-heart icon-heart"></i>
                        </div>
                        <div class="pink-circle-wardrobe"></div>
                    </div>
                    <div class="SD-wardrobe-item-info ">
                        <h4>Black Hemmed Pants</h4>
                        <p>$350</p>
                        <p>Size:
                            <select name="" id="#SD-sizeselect">
                                <option value=""><span>M</span></option>
                                <option value=""><span>L</span></option>
                                <option value=""><span>XL</span></option>
                            </select>
                        </p>
                        <p>Quantity:
                            <select name="" id="#SD-qtyselect">
                                <option value=""><span>1</span></option>
                                <option value=""><span>2</span></option>
                                <option value=""><span>3</span></option>
                            </select>
                        </p>
                        <a href=" ">Remove from wardrobe</a>
                    </div>
                </li>
            </ul>
            <div class="SD-wardrobe-bottom ">
                <p>Subtotal: <span>$1050</span></p>
                <button class="SD-button" data-toggle="modal" data-target="#SD-login-md">Checkout</button>
            </div>
        </div>
    </header>

