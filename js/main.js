$("#experiences_content").hide();

$(document).ready(function () {
  console.log("Welcome to my website!");
  $.getJSON(
    "https://api.countapi.xyz/hit/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a",
    function (response) {
      $("#contadorVisitas").text(response.value);
    }
  );

  // Handle 'About Me' content
  $("#about").click(function (e) {
    // If the div has already the class active, no need to reload the divs...
    if (!$(e.target).hasClass("active")) {
      console.log("About me clicked");
      // Update navbar
      clearActiveLinks();
      activateLink(e);

      // Hide other contents
      clearActiveDivs();

      // Show current content
      activateDiv("#about_content");
    }
  });

  // Handle 'Education' content
  $("#experiences").click(function (e) {
    // If the div has already the class active, no need to reload the divs...
    if (!$(e.target).hasClass("active")) {
      // Update navbar
      clearActiveLinks();
      activateLink(e);

      // Hide other contents
      clearActiveDivs();

      // Show current content
      activateDiv("#experiences_content");
    }
  });
});

function clearActiveLinks() {
  $("#navbarList .nav-item .nav-link").each(function () {
    $(this).removeClass("active");
  });
}

function clearActiveDivs() {
  $(".container .content .active").each(function () {
    $(this).removeClass("active");
    $(this).hide();
  });
}

function activateLink(e) {
  $(e.target).addClass("active");
}

function activateDiv(divId) {
  $(divId).addClass("active");
  $(divId).show();

  // Scrolls to the content
  scrollToContent(divId);
}

function scrollToContent(divId) {
  if ($(window).width() < 751) {
    $("html, body").animate(
      {
        scrollTop: $(divId).offset().top,
      },
      1
    );
  }
}

function resetViews() {
  $.getJSON(
    "https://api.countapi.xyz/set/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a?value=0",
    function (response) {
      $("#contadorVisitas").text("0");
    }
  );
}

(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });
})(jQuery);
