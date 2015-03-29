
$(document).ready(function(){

   // jQuery methods go here...

   $('.scroll-to-about').click(function(){
        var nextSection = $('#about');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

   $('.scroll-to-skills').click(function(){
        var nextSection = $('#skills');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

   $('.scroll-to-portfolio').click(function(){
        var nextSection = $('#portfolio');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

   $('.scroll-to-experience').click(function(){
        var nextSection = $('#experience');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

    $(".project").hover(function(){

        $(this).css("border", "8px solid #ff3d2b");
        $(this).css("border-width", "0 0 0 2px");
       
        },function(){
         $(this).find(".project-logo").css("border","2px solid rgba(245,245,245,1)");
         $(this).css("border-style", "none");
    });

});

