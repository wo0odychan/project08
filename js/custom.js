$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });


    $('.list li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.cf li').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });
    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    });
})