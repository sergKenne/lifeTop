
//function refresh page in body 
// function refresh() {
//    location.reload(); 
// }

$(window).resize(function() {
  location.reload();
});


$(document).ready(function() {

 // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


   var windowWidth = $(window).width();

   //console.log($(window).width());
   if ( windowWidth > 426 ){

      var navpos = $('#mainnav').offset();
      //console.log(navpos.top);
      $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
         $('#mainnav').addClass('navbar-fixed-top');
         }
         else {
           $('#mainnav').removeClass('navbar-fixed-top');
         }
      });
   }









	$('.menu-icon').click(function() {

		if( $('.nav-menu__list').is(':visible')) {
			$('.menu-icon__item').removeClass('black');
		}else {
			$('.menu-icon__item').addClass('black');
		}
		
		$('.nav-menu__list').slideToggle();
	});
          
    $("#selectList li").click(function() {
        $("#subList").toggle();
        $("#result").text($(this).text());
        $("#outerResult").val($(this).text());
    });


    $("#subList li").click(function() {
    	$("#outerResult").removeClass("select");
    	$("#subList li").removeClass("select");
        $(this).addClass("select");
    });

    //Range slider

	var $element = $('input[type="range"]');
	var $output = $('output');

	function updateOutput(el, val) {
	  el.textContent = val;
	}

	$element
	  .rangeslider({
	    polyfill: false,
	    onInit: function() {
	      updateOutput($output[0], this.value);
	    }
	  })
	  .on('input', function() {
	    updateOutput($output[0], this.value);
	  });

});  //end ready