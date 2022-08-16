$(function(){
    var $hdrWrap = $('.hdrWrap');
        $navWrap = $('.navWrap');
        
    $hdrWrap.find('.btns').click(function(){
        $navWrap.toggleClass('close');
        $('html').animate({scrollTop : 0});
    });
});