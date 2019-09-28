(function($) {
  var scroll = 0;
  $(window).scroll(function() {
    let position = $(window).scrollTop();
    $("body.page-id-473 .img_position_custom img").css(
      "opacity",
      1 - position * 0.01
    );
  });
})(jQuery);
