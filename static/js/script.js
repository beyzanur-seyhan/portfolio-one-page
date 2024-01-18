(function ($) {
  "use strict";

  // ------------------------------------------------------------------------------ //
  // Overlay Menu Navigation
  // ------------------------------------------------------------------------------ //
  var overlayMenu = function () {
    if (!$(".nav-overlay").length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-btn");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  };

  // Portfolio Slider
  var swiper = new Swiper(".portfolio-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Animate Texts
  var initTextFx = function () {
    document.querySelectorAll(".txt-fx").forEach(function (element) {
      var newstr = "";
      var count = 0;
      var delay = 100;
      var stagger = 10;
      var words = element.textContent.split(/\s/);
      var arrWords = new Array();

      words.forEach(function (value) {
        newstr = '<span class="word">';

        for (var i = 0, l = value.length; i < l; i++) {
          newstr +=
            "<span class='letter' style='transition-delay:" +
            (delay + stagger * count) +
            "ms;'>" +
            value[i] +
            "</span>";
          count++;
        }
        newstr += "</span>";

        arrWords.push(newstr);
        count++;
      });

      element.innerHTML = arrWords.join(
        "<span class='letter' style='transition-delay:" +
          delay +
          "ms;'>&nbsp;</span>"
      );
    });
  };

  $(document).ready(function () {
    overlayMenu();
    initTextFx();

    // mobile menu
    $(".menu-btn").click(function (e) {
      e.preventDefault();
      $("body").toggleClass("nav-active");
    });

    AOS.init({
      duration: 1200,
      // once: true,
    });
  });

  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
  });
})(jQuery);

window.scrollBy(0,50)