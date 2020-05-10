$(function(){
  $('#button').click(function() {
    $('.modal').toggleClass('modal_active');
  });
  $('#close-button').click(function() {
    $('.modal').toggleClass('modal_active');
  });
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
});