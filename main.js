(function ($) {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".topbar").addClass("top-bar d-none d-md-block");
    } else {
      $(".topbar").removeClass("top-bar d-none d-md-block");
    }
  });
})(jQuery);
