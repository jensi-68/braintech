$(document).ready(function(){

    $('.scrollToTop').hide()

    $(window).scroll(function(){
        h = $(window).scrollTop();

        // alert(h)
        if(h >= 150)
        {
            $('.bg').addClass('fixed')
            $('.scrollToTop').fadeIn(1000)
        }
        else
        {
            $('.bg').removeClass('fixed')
            $('.scrollToTop').fadeOut(100)
        }
    })

    $('.scrollToTop').click(function(){
        $('html,body').animate({scrollTop:0} , 1000)
    })

    setTimeout(function(){
        $('.loader').fadeOut(500)
    }, 3000)

})