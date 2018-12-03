/*
 * Background switcher
*/
$('[data-color]').click(function(){
  const color = $(this).data('color');

  $('.bag').css('background', color);
  $('button').css('border-color', color);
});
