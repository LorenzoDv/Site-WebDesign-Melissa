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
    $('.mail img').attr('src', '../assets/img/Picto Mail.svg');
    $('.linkedin img').attr('src', '../assets/img/Picto In.svg');
    $('.linkedin').removeClass('bg-linkedin');
    setTimeout(function () {
        $('.mail img').removeClass('active-img');
        $('.mail-adress').removeClass('active-mail');
        $('.tel img').removeClass('active-img');
        $('.tel-number').removeClass('active-tel');
        $('.tel img').attr('src', '../assets/img/Picto tel.svg');
        $('.tel').removeClass('bg-tel');
        $('.mail').removeClass('bg-mail');
        $('.mail img').attr('src', '../assets/img/Picto Mail.svg');
        $('.linkedin img').attr('src', '../assets/img/Picto In.svg');
        $('.linkedin').removeClass('bg-linkedin');
    }, 10000);
})
// $('.tel').mouseleave(function () {
//     $('.tel img').removeClass('active-img');
//     $('.tel-number').removeClass('active-tel');
// })

//hide class succes after 5s
setTimeout(function () {
    $('.succes').hide();
    $('.error').hide();
}, 2500);
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
    //apres 5s enlever la class active-mail active-img et bg-mail active-tel active-img et bg-tel
    setTimeout(function () {
        $('.mail img').removeClass('active-img');
        $('.mail-adress').removeClass('active-mail');
        $('.tel img').removeClass('active-img');
        $('.tel-number').removeClass('active-tel');
        $('.tel img').attr('src', '../assets/img/Picto tel.svg');
        $('.tel').removeClass('bg-tel');
        $('.mail').removeClass('bg-mail');
        $('.mail img').attr('src', '../assets/img/Picto Mail.svg');
        $('.linkedin img').attr('src', '../assets/img/Picto In.svg');
        $('.linkedin').removeClass('bg-linkedin');
    }, 10000);

})
// $('.mail').mouseleave(function () {
//     $('.mail img').removeClass('active-img');
//     $('.mail-adress').removeClass('active-mail');
// })
//
$('.linkedin').mouseenter(function () {
    $('.linkedin img').attr('src', '../assets/img/Picto In-change.svg');
    $('.linkedin').addClass('bg-linkedin');
    $('.tel img').removeClass('active-img');
    $('.tel-number').removeClass('active-tel');
    $('.mail img').removeClass('active-img');
    $('.mail').removeClass('bg-mail');
    $('.mail img').attr('src', '../assets/img/Picto Mail.svg');
    $('.tel img').attr('src', '../assets/img/Picto tel.svg');
    $('.tel').removeClass('bg-tel');
    $('.mail-adress').removeClass('active-mail');
    setTimeout(function () {
        $('.mail img').removeClass('active-img');
        $('.mail-adress').removeClass('active-mail');
        $('.tel img').removeClass('active-img');
        $('.tel-number').removeClass('active-tel');
        $('.tel img').attr('src', '../assets/img/Picto tel.svg');
        $('.tel').removeClass('bg-tel');
        $('.mail').removeClass('bg-mail');
        $('.mail img').attr('src', '../assets/img/Picto Mail.svg');
        $('.linkedin img').attr('src', '../assets/img/Picto In.svg');
        $('.linkedin').removeClass('bg-linkedin');
    }, 10000);
});
//faire rotate MandalaCV en fonction du scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.MandalaCV').css({
        transform: 'rotate(' + scroll / 20 + 'deg)'
    });
});


function parallax(e) {
    document.querySelectorAll('.para').forEach(function (move) {

        // let divGet3d = $(this).attr('style').match(/transform: translate3d\((.+)px,(.+)px,(.+)px\)/);
        // var value = parseInt(divGet3d[1]);
        // var value2 = parseInt(divGet3d[2]);
        // console.log(value, value2, divGet3d)


        let moving = move.getAttribute("data-value");
        let x = (e.clientX * moving) / 100;
        let y = (e.clientY * moving) / 100;

        move.style.transform = "translate3d(" + x + "px, " + y + "px, 10px)";
    });

}


document.addEventListener('mousemove', parallax);