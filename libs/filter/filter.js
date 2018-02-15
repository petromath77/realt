$(function() {

	var newSelection = "";
	
	$("#apartments-nav li").click(function(){
	
	    $("#all-apartments").fadeTo(200, 0.10);
	
		$("#apartments-nav li").removeClass("current");
		$(this).addClass("current");
		
		newSelection = $(this).attr("rel");
		
		$(".item_wrap_mx").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
		
	    $("#all-apartments").fadeTo(600, 1);
		
	});
	
});