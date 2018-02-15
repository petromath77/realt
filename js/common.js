$(document).ready(function() {

	// Custom JS
 	
	$('a.hamburger').on('click', function(){
		var has_cls = $('a.hamburger').hasClass('is-active');
			!has_cls ? $(this).addClass('is-active') : $(this).removeClass('is-active');
	});


	$('#menu li').on('click', function(){
        $('#menu li').removeClass('active_nav');
        $(this).addClass('active_nav');
    });
    $('.cont_butt').on('click', function(){
        $('#menu li').removeClass('active_nav');
        $('.cont').addClass('active_nav');
    });
	$('a.det_butt').on('click', function(){
		alert("!!!");
	});


//check menu is view
	if($('.advants').is(':visible')){
		$('.home').addClass('active_nav');
	}else if($('.blog').is(':visible')){
		$('.blg').addClass('active_nav');
	}else if($('.apartments').is(':visible')){
		$('.aprts').addClass('active_nav');
	}else if($('.testimonials').is(':visible')){
		$('.testim').addClass('active_nav');
	}else if($('.contact').is(':visible')){
		$('.cont').addClass('active_nav');
	}else if($('.apartments_detail').is(':visible')){
		$('.aprts').addClass('active_nav');
	}

//

$('.menu-link').bigSlide();

	$(function () { $('input, select, textarea').not('[type=submit]').jqBootstrapValidation(); } );

	$('.panel li, .cont_butt').on('click', function(){
		$(window).scrollTop(700);
	});

});

$(window).on('load', function() { 
	$('.loader_inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});
