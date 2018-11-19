<?php
/**
 * Displays content for Shop page
 *
 * @package WordPress
 * @subpackage suketdhir
 * @since 1.0
 * @version 1.0
 */

?>

<nav class="navigation shopTopHeader" id="mainNav">
<ul class="flex wrap widthFull">
    <?php
        $args = array(
        'type'                     => 'post',
        'child_of'                 => 0,
        'parent'                   => '',
        'orderby'                  => 'name',
        'order'                    => 'ASC',
        'hide_empty'               => 0,
        'hierarchical'             => 1,
        'exclude'                  => '15',
        'include'                  => '',
        'number'                   => '',
        'taxonomy'                 => 'product_cat',
        'pad_counts'               => false
        ); 
        $product_cat = get_categories($args);

        foreach ($product_cat as $cat) {
            echo '<li>
                    <a class="navigationLink active" href="#'. $cat->term_id.'">'.$cat->name.'</a>
                </li>';
        }

    ?>
    <!-- <li>
        <a class="navigation__link active" href="#outerWear">Outerwear</a>
    </li>
    <li>
        <a class="navigation__link" href="#shirts">Shirts</a>
    </li>
    <li>
        <a class="navigation__link" href="#kurtas">Kurtas</a>
    </li>
    <li>
        <a class="navigation__link" href="#trousers">Trousers</a>
    </li>
    <li>
        <a class="navigation__link" href="#nightwear">Nightwear</a>
    </li> -->
</ul>
<!-- <div class="shopSelect">
    <select name="" id="">
        <option value="" selected disabled>Size</option>
        <option value="">Size</option>
        <option value="">Size</option>
        <option value="">Size</option>
        <option value="">Size</option>
        <option value="">Size</option>
    </select>
</div> -->
</nav>

<div class="shopContent">

    <?php
        $args = array(
        'type'                     => 'post',
        'child_of'                 => 0,
        'parent'                   => '',
        'orderby'                  => 'name',
        'order'                    => 'ASC',
        'hide_empty'               => 0,
        'hierarchical'             => 1,
        'exclude'                  => '15',
        'include'                  => '',
        'number'                   => '',
        'taxonomy'                 => 'product_cat',
        'pad_counts'               => false
        ); 
        $product_cat = get_categories($args);

        foreach ($product_cat as $cat) ://print"<pre>"; print_r($cat);?>

        <div class="flex wrap page-section hero" id="<?php echo $cat->term_id;?>">
            <?php $args = array(
                            'posts_per_page'   => '',
                            'offset'           => 0,
                            'product_cat'      => $cat->slug,
                            'category_name'    => '',
                            'orderby'          => 'date',
                            'order'            => 'DESC',
                            'include'          => '',
                            'exclude'          => '',
                            'meta_key'         => '',
                            'meta_value'       => '',
                            'post_type'        => 'product',
                            'post_mime_type'   => '',
                            'post_parent'      => '',
                            'author'       => '',
                            'author_name'      => '',
                            'post_status'      => 'publish',
                            'suppress_filters' => true 
                        );
                
                        $loop = new WP_Query( $args );
                            while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
                                <a href="<?php echo get_permalink( $loop->post->ID ); ?>" class="whiteBack shopCol">
                                    <div class="imgThreeSeventyFour">
                                        <?php if (has_post_thumbnail( $loop->post->ID )) {
                                            echo get_the_post_thumbnail($loop->post->ID, 'shop_catalog');
                                            }
                                            // else {
                                            //     echo '<img src="'.woocommerce_placeholder_img_src().'" alt="Placeholder" width="300px" height="300px" />';
                                            // }
                                        ?>
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
                            <?php endwhile; ?>
    <?php wp_reset_query(); ?>
        </div>
    <?php endforeach;?>
    
</div>


