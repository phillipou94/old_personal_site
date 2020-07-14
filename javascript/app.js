
$(document).ready(function(){

   // jQuery methods go here...

   $('.scroll-to-about').click(function(){
        var nextSection = $('#about');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

   $('.scroll-to-experience-and-projects').click(function(){
        var nextSection = $('#experience-header');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top - 50
        }, 2000);
    });

    $('.scroll-to-contact').click(function(){
        var nextSection = $('#contact');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top - 50
        }, 2000);
    });

    $('#experience-button').click(function(){
        var nextSection = $('#experience-header');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top - 50
        }, 2000);
    });

});

