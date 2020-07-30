$(document).ready(function(){
    $(".slider").slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000,
    });
    $(".modal").modal();
    $('.tabs').tabs();
    $(".tabs-content").css('height','1000px');
})
