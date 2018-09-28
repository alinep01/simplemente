/*  SERVIÇOS */

$(function() {
	new WOW().init();
});


/*  TEAM */

$(function(){
  $("#team-members").owlCarousel({
  	items: 4,
  	autoplay: true,
  	smartSpeed: 700,
  	loop: true
  });
});




/*  TESTIMONIALS */

$(function(){
  $("#customers-testimonials").owlCarousel({
  	items: 1,
  	autoplay: true,
  	smartSpeed: 700,
  	loop: true
  });
});




/*  COUNTER   */

$(function(){
  $('.counter').counterUp({
  	delay: 10,
  	time: 3000
  });
});





/*  CLIENTS */

$(function(){
  $("#clients-list").owlCarousel({
  	items: 3,
  	autoplay: true,
  	smartSpeed: 700,
  	loop: true
  });
});

 
/*   NAVIGATION   */


$(function(){
  $(window).scroll(function(){
  	if($(this).scrollTop() < 250 ) {
  		//hide nav
  		$("nav").removeClass("vesco-top-nav");
  		$("#back-to-top").fadeOut();
  	} else {
  		//show nav
  		$("nav").addClass("vesco-top-nav");
  		$("#back-to-top").fadeIn();
  	}
  });
});





/*   SCROLL   */


$(function(){
	$("a.smooth-scroll").click(function(event){
		event.preventDefault();
		//get return id like #about, #work, #team and etc 
		var section = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});





/*   SCROLL   */

$(function(){
	$(".navbar-collapse ul li a").on("click touch", function(){
		$(".navbar-toggler").click();
	});
});














