$('#sous-menu').hover(function () {
    $('.sous-menu').addClass('active-menu');
});
// $('#sous-menu').mouseleave(function () {
//     $('.sous-menu').removeClass('active-menu');
// });
$('.sous-menu').mouseleave(function () {
    $('.sous-menu').removeClass('active-menu');
});

$('.slidePortefolio').each(function () {
    $(this).find('.mandala').hover(function () {
        $(this).addClass('active-slide');
    });
    $(this).find('.mandala').mouseleave(function () {
        $(this).removeClass('active-slide');
    });

});

$('.tel').mouseenter(function () {
    $('.tel img').addClass('active-img');
    $('.tel-number').addClass('active-tel');
})
$('.tel').mouseleave(function () {
    $('.tel img').removeClass('active-img');
    $('.tel-number').removeClass('active-tel');
})

$('.mail').mouseenter(function () {
    $('.mail img').addClass('active-img');
    $('.mail-adress').addClass('active-mail');
})
$('.mail').mouseleave(function () {
    $('.mail img').removeClass('active-img');
    $('.mail-adress').removeClass('active-mail');
})


//faire rotate MandalaCV en fonction du scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.MandalaCV').css({
        transform: 'rotate(' + scroll / 20 + 'deg)'
    });
});
