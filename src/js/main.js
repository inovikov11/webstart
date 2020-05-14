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
  //Воспроизводим анимацию при прокрутке

  $getOffset = function($obj) {
    $objTop = $($obj).offset();
    $top = $objTop.top;
    return $top;
  }

  $getTop = function($obj) {
    return $getOffset($obj) - $( window ).height();
  }

  $scrollToAnimate = function($obj, $animateObj = $obj) {
    if ($('body,html').scrollTop() >= $getTop($obj)) {
      $($animateObj).css("animation-play-state", "running");
    }
  }
  
  $( window ).scroll(function() {
    $scrollToAnimate('.owl-carousel', '.owl-nav');
    $scrollToAnimate('.cards', '.card');
    
    console.log($('body,html').scrollTop());
  });

  //Валидация форм
  $('#brif_form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: "required"
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Пожалуйста, введите минимум 2 буквы"),
        maxlength: jQuery.validator.format("Максимум 15 символов")
      },
      phone: {
        required: "Заполните поле"
      }
    }
  });

  //Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});