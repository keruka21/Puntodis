$(document).ready(function(){
    AOS.init();
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            }
        ]
    });
    var $logo = $("#logo");
    var $navbar = $("#navbar-principal");
         $(window).on("scroll", function() {
            var scrollTop = $(this).scrollTop();
            $navbar.toggleClass('bg-change', scrollTop > 50).toggleClass('bg-transparent', scrollTop <= 50);
            $logo.css("width", scrollTop > 50 ? '200px' : '250px');
        });
        $('.center').slick({
            centerMode: true,
            arrows:false,
            centerPadding: '24px',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
                }
             
            ]
          });
});