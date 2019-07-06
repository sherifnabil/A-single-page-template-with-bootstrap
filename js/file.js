$(function () {
  $('.carousel').carousel({
    interval: 4000
  });
  $('.gear-check').click(function() {
    $('.color-option').fadeToggle();
  });
});

$(window).on("load",function() {

  $('.myloading .spinner').fadeOut(5000, function() {
    $(this).parent().fadeOut(1000);
    $('body').css("overflow", "auto");
  });



});

//Changing the site's stylesheet
