      
    
    //nice scroll
$(document).ready(function () {		
	$("html").niceScroll();
	
});



//counter up 
jQuery(document).ready(function(){
    $('.counter').counterUp({
        delay: 20,
        time: 2000
 });

   });

   // owl carousal
   $('.owl-carousel').owlCarousel({
    autoplay:true,   
    nav:true, 
    loop:true,
    margin:150,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

//sign in 

$(document).ready(function(){
    $("#signIn").click (function(){
        $("#signInModal").modal('toggle');
    });

})