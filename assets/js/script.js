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
    $(this).find('.mandala-center').hover(function () {
        $(this).addClass('active-slide-center');
        $(this).removeClass('active-slide');
    });
    $(this).find('.mandala-center').mouseleave(function () {
        $(this).removeClass('active-slide-center');
        $(this).removeClass('active-slide');
    });

});

$('.tel').mouseenter(function () {
    $('.tel img').addClass('active-img');
    $('.tel-number').addClass('active-tel');
    $('.mail img').removeClass('active-img');
    $('.mail-adress').removeClass('active-mail');
    $('.tel').addClass('bg-tel');
    $('.tel img').attr('src', '../assets/img/Picto tel-change.svg');
    $('.mail').removeClass('bg-mail');
    $('.mail img').attr('src', '../assets/img/Picto mail.svg');
    $('.linkedin img').attr('src', '../assets/img/Picto In.svg');
    $('.linkedin').removeClass('bg-linkedin');
})
// $('.tel').mouseleave(function () {
//     $('.tel img').removeClass('active-img');
//     $('.tel-number').removeClass('active-tel');
// })

$('.mail').mouseenter(function () {
    $('.mail img').addClass('active-img');
    $('.mail-adress').addClass('active-mail');
    $('.tel img').removeClass('active-img');
    $('.tel-number').removeClass('active-tel');
    $('.tel img').attr('src', '../assets/img/Picto tel.svg');
    $('.tel').removeClass('bg-tel');
    $('.mail').addClass('bg-mail');
    $('.mail img').attr('src', '../assets/img/Picto mail-change.svg');
    $('.linkedin img').attr('src', '../assets/img/Picto In.svg');
    $('.linkedin').removeClass('bg-linkedin');

})
// $('.mail').mouseleave(function () {
//     $('.mail img').removeClass('active-img');
//     $('.mail-adress').removeClass('active-mail');
// })

$('.linkedin').mouseenter(function () {
    $('.linkedin img').attr('src', '../assets/img/Picto In-change.svg');
    $('.linkedin').addClass('bg-linkedin');
    $('.tel img').removeClass('active-img');
    $('.tel-number').removeClass('active-tel');
    $('.mail img').removeClass('active-img');
    $('.mail').removeClass('bg-mail');
    $('.mail img').attr('src', '../assets/img/Picto mail.svg');
    $('.tel img').attr('src', '../assets/img/Picto tel.svg');
    $('.tel').removeClass('bg-tel');
    $('.mail-adress').removeClass('active-mail');
});
//faire rotate MandalaCV en fonction du scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.MandalaCV').css({
        transform: 'rotate(' + scroll / 20 + 'deg)'
    });
});
