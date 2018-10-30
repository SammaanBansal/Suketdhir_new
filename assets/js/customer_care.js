$(document).ready(function(){
	$(".SD-main-content .SD-side-tabs ul li a").click(function(){
		var $this = $(this);
		// first change active state for underline
		$(".SD-main-content .SD-side-tabs ul li a.active-tab").removeClass("active-tab");
		$this.addClass("active-tab");

		// then get data-tab value
		var clicked_value = $this.data("tab");

		// then show respective text
		$(".SD-main-content .SD-tab-content .SD-tab-content-text.SD-active-tab-content-text").removeClass("SD-active-tab-content-text");
		$(".SD-main-content .SD-tab-content .SD-tab-content-text[data-tab-content=" + clicked_value + "]").addClass("SD-active-tab-content-text");
	});

	$(".SD-faq-question").click(function(){
		var $this = $(this);
		$this.siblings("p").slideToggle(400);
		$this.children("img").toggleClass("SD-rotate");
	});

});