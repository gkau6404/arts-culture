//GLOBAL VARIABLES
/* global $ */

$(window).load(function(){
            setTimeout(function(){
                $('#preloader').velocity({
                    opacity : 0.1,
                    translateY: "-80px"
                }, {
                    duration: 1000,
                    complete: function(){
                    $('#hola').velocity({
                    translateY : "-100%"
                }, {
                    duration: 400,
                    easing: [1,0,0.3,1],
                    complete: function(){
                        $('.home').addClass('animate-border divide');
                    }
                })  
                    }
                })
            },1000)
        });
  
  $(".centers").delay(5500).fadeIn(3000);  
    $(".centers").delay(1500).fadeOut(1000);  
     $(".text").delay(10500).fadeIn(1000); 
    
      