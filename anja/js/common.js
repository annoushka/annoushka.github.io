$(document).ready(function() {

    
    $(".info-toggle").click(function() {
        $(".info-hidden").slideToggle(0);
    });
    $(".navbar-toggle").click(function() {
        $(".navbar-nav").slideToggle(0);
    });
    $(".ingredients").click(function() {
        $(".ingredients-hidden").slideToggle(0);
    });
    
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 400);
		return false;
	});

});
// magic scroll
// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  // build a tween 
  var tween = TweenMax.from($(this), 0.6, {autoAlpha: 0, scale: 1.0, y: '+=10', ease:Linear.easeNone});

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
  
});


