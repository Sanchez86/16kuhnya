/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
$(document).ready(function () {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* конец кнопка на верх*/

$('.one .block').on('mouseenter', function () {
    $(this).addClass('active');
})
$('.one .block').on('mouseleave', function () {
    $(this).removeClass('active');
})

$('.fourBlocks').on('mouseenter', function () {
    $(this).addClass('active');
})
$('.fourBlocks').on('mouseleave', function () {
    $(this).removeClass('active');
})

$('.bott_caretUp').on('mouseenter', function () {
    $('.myPopup').css({
        'opacity': '1',
        'display': 'block'
        })
})
$('.bott_caretUp').on('mouseleave', function () {
    $('.myPopup').css({
        'opacity': '0',
        'display': 'none'
    })
})
$('.myPopup').on('mouseenter', function () {
    $(this).css({
        'opacity': '1',
        'display': 'block'
    })
})
$('.myPopup').on('mouseleave', function () {
    $(this).css({
        'opacity': '0',
        'display': 'none'
    })
})
$(function () {
    fr = new FilmRoll({
        container: '#film_roll',
        height: 330
    });
});











