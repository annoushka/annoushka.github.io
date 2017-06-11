$(document).ready(function() {

    
    $(".navbar-toggle").click(function() {
        $(".nav").slideToggle();
    });
    $(".navbar-toggle").click(function() {
        $(".navbar-nav").slideToggle();
    });

	
	
	//Документация: https://owlcarousel2.github.io
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4,
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});
// magic scroll
// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  // build a tween 
  var tween = TweenMax.from($(this), 1.4, {autoAlpha: 0, scale: 1.0, y: '+=20', ease:Linear.easeNone});

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
  
});

