$(function(){
  //Подключаем модальное окно
  $('#button').click(function() {
    $('.modal').toggleClass('modal_active');
  });
  $('#close-button').click(function() {
    $('.modal').toggleClass('modal_active');
  });
  //Подключаем стрелку вверх
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#arrow').fadeIn();
    } else {
      $('#arrow').fadeOut();
    }
  });
    $('#arrow').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
  //Подключаем слайдер
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoWidth:false,
    center:false,
    nav:true,
    navText:[$('.arrow-left'), $('.arrow-right')],
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        }
    }
  });
});