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

<div class="SD-collections-eg">
    <div class="SD-clothing-head shop-sub">
        <ul>
            <li class="SD-col-head submenu-clothing active"><a href="#Outwear"> Outwear</a> </li>
            <li class="SD-col-head submenu-clothing"><a href="#Kurtas"> Kurtas </a></li>
            <li class="SD-col-head submenu-clothing"><a href="#Shirts"> Shirts </li>
            <li class="SD-col-head submenu-clothing"><a href="#Trousers"> Trousers </li>
            <li class="SD-col-head submenu-clothing"><a href="#Nightwear"> Nightwear </li>
        </ul>
        <p class="SD-col-head submenu-clothing-size" id="size">
            <select>
                <Option value="">Size</Option> 
                <Option value="xs">XS</Option> 
                <Option value="s">S</Option> 
                <Option value="m">M</Option> 
                <Option value="l">L</Option> 
            </select>
        </p>
    </div>
    <?php the_content();?>
    <!-- <div class="row SD-clothing-row" id="Outwear">
        <div class="col-sm-6 SD-col-images pink-circle-parent-1 bg-icon-mango">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#abc"><img class="" src="assets/images/men_images/Men1.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men2.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
    </div> -->
    <!-- <div class="row SD-clothing-row" id="Kurtas">
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men3.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men4.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
    </div>
    <div class="row SD-clothing-row" id="Shirts">
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men5.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men6.png"></a>

            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
    </div>
    <div class="row SD-clothing-row" id="Trousers">
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men1.png"></a>

            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men2.png"></a>

            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
    </div>
    <div class="row SD-clothing-row" id="Nightwear">
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men3.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men4.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men5.png"></a>
            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
        <div class="col-sm-6 SD-col-images pink-circle-parent-1">
            <p class="SD-heart"><i class="ion ion-heart icon-heart"></i></p>
            <a href="#"><img class="" src="assets/images/men_images/Men6.png"></a>

            <a href="#">
                <p class="SD-clothing-name">BLACKED HAMMED PANTS</p>
            </a>
            </a>
            <p class="SD-clothing-sizes">|X,M,XL|</p>
            <p class="SD-clothing-price">$350</p>
            <div class="pink-circle"></div>
        </div>
    </div>
 -->
</div>
<!-- <ul class="pagination SD-clothing-pagination">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
</ul> -->