$(function(){
    $('.new .btNext').click(function(){
        $('.new .imgGroup .image').first().appendTo('.new .imgGroup');
    });
    $('.new .btPrev').click(function(){
        $('.new .imgGroup .image').last().prependTo('.new .imgGroup');
    });
});