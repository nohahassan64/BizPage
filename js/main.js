//////////// Client
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });


////   Slider Testim ///
var indexTestim = 1;

function currentSliderTestim(n){
    showTestim(indexTestim = n);
}

showTestim(1);
function showTestim(n){
    var i;
    var y = document.querySelectorAll('.my-testim .persons');
    var dots = document.querySelectorAll('.my-testim .dots li');
    if(n > y.length){ indexTestim = 1};
    if(n < 1){ indexTestim = y.length};
    for(i = 0 ; i < y.length ; i++){
        y[i].style.display = "none";
    }
    y[indexTestim-1].style.display = "block";
    for(var i = 0 ; i < dots.length ; i++){

        dots.className = dots[i].classList.remove('active');
    };
    dots[indexTestim-1].className += " active";

   
}
autoSliderTestim();
function autoSliderTestim(){
    var i;
    var y = document.querySelectorAll('.my-testim .persons');
    var dots = document.querySelectorAll('.my-testim .dots li');
   


    for(i = 0 ; i < y.length ; i++){
        y[i].style.display = "none";
    }
    if(indexTestim > y.length){indexTestim = 1}
    y[indexTestim-1].style.display = "block";
    indexTestim++;



    for(var i = 0 ; i < dots.length ; i++){

        dots.className = dots[i].classList.remove('active');
    };
    dots[indexTestim-2].className += " active";

    setTimeout(autoSliderTestim , 5000);

}
/******************************************************************************** */

$(function(){

   // Cover Slider 
   $('.slider , .carousel-item').height($(window).height());


    $(".portfolio-ul li").on("click" , function() {

        $(this).addClass("active").siblings().removeClass("active");

        if($(this).data("class")== "all"){

            $(".portfolio-section .row .col-md-4").css("display" , 'block');

        }else{

            $(".portfolio-section .row .col-md-4").css("display" , "none");

            $($(this).data("class")).parent().css("display" , 'block');

        }
    });


   // Scroll To Top

    $('.scroll-top i').click(function(){
        $('html , body').animate({
            scrollTop : 0
        },600);
    });


    
  // Smooth Scroll To Div

     $('.navbar-nav li a').click(function(){

        $('html , body').animate({

       scrollTop: $($(this).data('value')).offset().top - 70
       
        },1000);

        $('.navbar-dark .navbar-nav .nav-link').addClass('active').parent().siblings().find('a').removeClass('active');


    });

    
    $(window).scroll(function(){

        if( $(this).scrollTop() >= 150){
            $('.scroll-top i').fadeIn();

            $('.navbar').addClass('scrolled');
        


        }else{
            $('.scroll-top i').fadeOut(); 

            $('.navbar').removeClass('scrolled'); 
            
        }



        let scrollSection = $(document).scrollTop();
    // Progress

    
    if((scrollSection >=2300) && (scrollSection <2600)){
        $('.our-skills .progress-bar.html').animate({
            width:'100%'
        },100);

    }      

    if((scrollSection >=2300) && (scrollSection <2600)){
        $('.our-skills .progress-bar.css').animate({
            width:'90%'
        },100);

    }  

    if((scrollSection >=2300) && (scrollSection <2600)){
        $('.our-skills .progress-bar.js').animate({
            width:'75%'
        },100);

    }  

    if((scrollSection >=2300) && (scrollSection <2600)){
        $('.our-skills .progress-bar.photoshop').animate({
            width:'55%'
        },100);

    } 
        
        
    
    });


    $('.facts-box span').counterUp({

        delay:10,
        time:1000
    });
   
    $(window).on( 'load' , function(){

    $('body').css('overflow','auto');

    $(".load .center").fadeOut(3000 , function() {
        $(this).parent().fadeOut(3000 , function() {
            $(this).remove();
        });
    });
});


});

