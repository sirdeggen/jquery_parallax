$(window).scroll(function() {
      var y = 0;
      var scroll = $(window).scrollTop();
      var win = $(window).height()
      var height = $(".parallax").height();
      var offset = $(".parallax").offset().top;
      y = ((100 * scroll)/(height + win)) + ((100 * (win - offset))/(height + win));
      if (y > 100){y = 100;}
      else if (y < 0){y = 0;}
      var out = String(y) + "%";
      $(".parallax").css("background-position-y", out);
});
