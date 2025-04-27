$(document).ready(function () {
  if ($(".burger-mobile").length > 0) {
    let menu = $(".header-menu");
    let burger = $(".burger-mobile");
    let body = $("body");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.stop().slideDown();
        body.addClass("hidden");
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      body.removeClass("hidden");
      menu.stop().slideUp();
    }
  }

  if ($(".link-menu-catalog").length > 0) {
    let menu = $(".invisProductCatalog");
    let burger = $(".link-menu-catalog");
    let body = $("body");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.stop().slideDown();
        // body.addClass("hidden");
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      // body.removeClass("hidden");
      menu.stop().slideUp();
    }
  }

  if ($(".grettings-main-slider").length > 0) {
    const swiper = new Swiper(".grettings-main-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".grettings-main-slider .btnSwiperPrev",
        nextEl: ".grettings-main-slider .btnSwiperNext",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".faq-section").length > 0) {
    $(".faq-section__quest").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".faq-item").removeClass("opened");
        $(this).next(".faq-section__answer").stop().slideUp();
      } else {
        $(".faq-item").removeClass("opened");
        $(".faq-section__quest").removeClass("active");
        $(".faq-section__answer").stop().slideUp();

        $(this).parents(".faq-item").addClass("opened");
        $(this).addClass("active");
        $(this).next(".faq-section__answer").stop().slideDown();
      }
    });
  }

  if ($(".reviews-slider").length > 0) {
    const swiper = new Swiper(".reviews-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: {
        prevEl: ".reviews-slider .btnSwiperPrev",
        nextEl: ".reviews-slider .btnSwiperNext",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
        },
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".marquee").length > 0) {
    const speed = 0.4;

    Marquee(".marquee--normal", speed);
    Marquee(".marquee--alternate", speed, true);
  }

  // --------------------------------

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }
});

function Marquee(selector, speed, reverse = false) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  let marqueeInterval;

  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  function startMarquee() {
    marqueeInterval = setInterval(function () {
      firstElement.style[reverse ? "marginRight" : "marginLeft"] = `-${i}px`;

      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  function stopMarquee() {
    clearInterval(marqueeInterval);
  }

  parentSelector.addEventListener("mouseenter", stopMarquee);
  parentSelector.addEventListener("mouseleave", startMarquee);

  startMarquee();
}
