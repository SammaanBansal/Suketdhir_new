jQuery(document).ready(function(){

    jQuery('#profile-1 .edit a').click(function(){
      jQuery('#profile-2').show();
      jQuery('#profile-1').hide();
    });

  jQuery('#SD-address-1 i').click(function(){
    jQuery('#SD-address-2').show();
    jQuery('#SD-address-1').hide();
  });
    jQuery('#recentOrder1 .more a').click(function(){
    jQuery('#recentOrder2').show();
    jQuery('#recentOrder1').hide();
  });
  jQuery('#recentOrder2 .back a').click(function(){
  jQuery('#recentOrder1').show();
  jQuery('#recentOrder2').hide();
});
jQuery('#recentOrder3 .back a').click(function(){
jQuery('#recentOrder1').show();
jQuery('#recentOrder3').hide();
});
jQuery('#recentOrder2 .Sd-cancel-order a').click(function(){
jQuery('#cancelOrder1').show();
jQuery('#recentOrder2').hide();
});
jQuery('#cancelOrder1 .back a').click(function(){
jQuery('#recentOrder2').show();
jQuery('#cancelOrder1').hide();
});
jQuery('#returnorder1 .SD-return-back a').click(function(){
jQuery('#returnOrder2').show();
jQuery('#returnorder1').hide();
});
jQuery('#returnOrder2 .back a').click(function(){
jQuery('#returnorder1').show();
jQuery('#returnOrder2').hide();
});
});
