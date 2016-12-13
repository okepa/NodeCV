$(document).ready(function(){
    //Slider
    $('.slider').slider({full_width: true});
    $('.slider').slider({height: 690});

   
    // Parallax
    $('.parallax').parallax();
    //Carousel
    $('.carousel').carousel();

    $(function(){
                
        var options = [

        {selector: '.personalDetails', offset: 200, callback: '$(".personalDetails").addClass("bounceInRight animated").css("visibility", "visible")'},   
        {selector: '.education', offset: 200, callback: '$(".education").addClass("bounceInLeft animated").css("visibility", "visible")'},
        {selector: '.jobs', offset: 200, callback: '$(".jobs").addClass("bounceInRight animated").css("visibility", "visible")'},
        {selector: '.skills', offset: 200, callback: '$(".skills").addClass("bounceInLeft animated").css("visibility", "visible")'}    
    ];

    Materialize.scrollFire(options);

    });
    
    $(function() {

        $('a[href*="#"]:not([href="#"])').click(function() {

            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');



            if (target.length) {
                //Moves the body
                $('html, body').animate({
                //gets the position of the element
                scrollTop: target.offset().top - 50
                }, 1000);
                console.log(target.offset().top);
                console.log(target.offset().top - 50);
                return false;
            }
            }
        });
    });
    
    $(function(){

        $("#nav-mobile a").click(function(){
        $("#nav-mobile").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        });
    });

});



