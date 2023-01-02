$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        center:true,
        responsiveClass:true,
        autoWidth:true,
        navText:[
            '<img src="img/slider/leftarrow.svg" alt="left">',
            '<img src="img/slider/right arrow.png" alt="right">'
        ],
        
        responsive:{
            0:{
                items:1,
                
            },
            700:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                
            }
        }
    
    })
});

