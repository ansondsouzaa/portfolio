// JavaScript Document

$(window).load(function () {
  "use strict";
  // makes sure the whole site is loaded
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
  $("body").delay(350).css({
    overflow: "visible",
  });
});

$(document).ready(function () {
  ("use strict");

  // scroll menu
  var sections = $(".section"),
    nav = $(".navbar-fixed-top,footer"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });

  nav.find("a").on("click", function () {
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height + 2,
      },
      600
    );

    return false;
  });

  // Menu opacity
  if ($(window).scrollTop() > 80) {
    $(".navbar-fixed-top").addClass("bg-nav");
  } else {
    $(".navbar-fixed-top").removeClass("bg-nav");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $(".navbar-fixed-top").addClass("bg-nav");
    } else {
      $(".navbar-fixed-top").removeClass("bg-nav");
    }
  });

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  $(function () {
    parallax();
  });

  // AOS
  AOS.init({
    duration: 1200,
    once: true,
    disable: "mobile",
  });

  //  isotope
  $("#projects").waitForImages(function () {
    var $container = $(".portfolio_container");
    $container.isotope({
      filter: "*",
    });

    $(".portfolio_filter a").click(function () {
      $(".portfolio_filter .active").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 500,
          animationEngine: "jquery",
        },
      });
      return false;
    });
  });

  // Experience Certificates
  $("#exp01").animatedModal({
    modalTarget: "animatedExp1",
  });
  $("#exp02").animatedModal({
    modalTarget: "animatedExp2",
  });
  $("#exp03").animatedModal({
    modalTarget: "animatedExp3",
  });

  // Education Certificates
  $("#edu01").animatedModal({
    modalTarget: "animatedEdu1",
  });
  $("#edu02").animatedModal({
    modalTarget: "animatedEdu2",
  });
  $("#edu03").animatedModal({
    modalTarget: "animatedEdu3",
  });

  // Academic Porjects
  $("#demo01").animatedModal({
    modalTarget: "animatedModal",
  });
  $("#demo02").animatedModal({
    modalTarget: "animatedModal2",
  });
  $("#demo03").animatedModal({
    modalTarget: "animatedModal3",
  });
  $("#demo04").animatedModal({
    modalTarget: "animatedModal4",
  });
  $("#demo05").animatedModal({
    modalTarget: "animatedModal5",
  });
  $("#demo06").animatedModal({
    modalTarget: "animatedModal6",
  });
  $("#demo07").animatedModal({
    modalTarget: "animatedModal7",
  });
  $("#demo08").animatedModal({
    modalTarget: "animatedModal8",
  });
  $("#demo09").animatedModal({
    modalTarget: "animatedModal9",
  });
  $("#demo10").animatedModal({
    modalTarget: "animatedModal10",
  });
});
