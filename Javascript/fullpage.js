(function($) {
  new fullpage(".home #et-boc", {
    sectionsColor: ["#999", "#888", "#777", "#fff", "#555"],
    parallax: true,

    // Navigation
    slidesNavigation: true,
    navigation: true,
    navigationPosition: "pagei-sideNav-style1",
    navigationTooltips: [
      "Output",
      "About me",
      "Philosophy",
      "Contact",
      "Instagram"
    ],

    // scroll
    scrollOverflow: true,

    dragAndMove: true
  });

  $(".scroll-down.contact, .menu_contact").on("click", function() {
    $("#fp-nav ul li:nth-of-type(4) a")[0].click();
  });
  $(".scroll-down.instagram").on("click", function() {
    $("#fp-nav ul li:nth-last-of-type(1) a")[0].click();
  });
})(jQuery);
