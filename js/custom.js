/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
window.onload = function() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();

    document.getElementById('date').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();
};
$(document).ready(function(){
          $("#contact").submit(function(event) {
              /* stop form from submitting normally */
              event.preventDefault();
              /* get the action attribute from the <form action=""> element */
              var $form = $( this ),
                  url = $form.attr( 'action' );
        //alert();
              /* Send the data using post with element id name and name2*/
             var parameters = { name: $('.name').val(), phone: $('.phone').val(), email: $('.email').val(),message: $('.message').val() };
        window.alert(url)
              $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyZ_gKLJw_OFliNaThZ_TETLgu-VkCcxU-atxKh/exec",
                  method: "POST",
                  data: parameters})
                  .done(function(data){
                  
                            $('#contact-error-msg').css('color','green');
                            $('#contact-error-msg').html('Email sent successfully.');
                      })
                 .fail(function(jqXHR, textStatus, errorThrown){
                    
                         $('#contact-error-msg').css('color','red');
                        $('#contact-error-msg').html('Falied: Please try again later or contact us.');
                 });
            });
    });