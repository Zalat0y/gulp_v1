
// hide menu

$('.collapse').on('click', function(){
  $('.menu').click(function() {
    $(this).addClass('menu-hidden');

  });
});

// remove menu

$('.collapse').on('click', function(){
  $('.menu-hidden').click(function() {
    $(this).removeClass('menu-hidden');

  });
});
