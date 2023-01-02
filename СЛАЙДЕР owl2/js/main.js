

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        Infinity: true,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        center:true,
        responsiveClass:true,
        autoWidth:true,
        navText:[
            '<img src="img/arrow.svg" alt="left-arrow">',
            '<img src="img/arrow_right.png" alt="right-arrow">'
        ],
        
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    
    })
});