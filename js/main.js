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
      effect: "fade",
      fadeEffect: { crossFade: true },
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

    if ($(window).width() < 768) {
      // console.log("mobile");
    } else {
      Marquee(".marquee--normal", speed);
      Marquee(".marquee--alternate", speed, true);
    }
  }

  if ($(".subcategories-slider").length > 0) {
    const sliders = document.querySelectorAll(".subcategories-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperNext")[0];
          navPrev = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".blog-block-slider").length > 0) {
    const swiper = new Swiper(".blog-block-slider", {
      slidesPerView: 3,
      spaceBetween: 16,
      navigation: {
        prevEl: ".blog-block .btnSwiperPrev",
        nextEl: ".blog-block .btnSwiperNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".catalog-section__search").length > 0) {
    $(".catalog-section__search input").on("input", function () {
      if ($(this).val().trim() !== "") {
        $(this).siblings(".btnClearSearch").show();
      } else {
        $(this).siblings(".btnClearSearch").hide();
      }
    });

    $(".btnClearSearch").on("click", function () {
      $(this).siblings("input").val("");
      $(this).hide();
    });
  }

  if ($(".filter").length > 0) {
    $(".filter__title").on("click", function () {
      if ($(this).hasClass("opened")) {
        $(this)
          .removeClass("opened")
          .siblings(".filter__content")
          .stop()
          .slideUp();
      } else {
        $(this)
          .addClass("opened")
          .siblings(".filter__content")
          .stop()
          .slideDown();
      }
    });

    $(".filter-mobile-button").on("click", toggleFilter);
    $(".overlay, .filter-mobile-head__close").on("click", closeFilter);

    function toggleFilter() {
      $(".catalog-section__left, .overlay, body").toggleClass(
        "opened visible hidden"
      );
    }

    function closeFilter() {
      $(".catalog-section__left, .overlay, body").removeClass(
        "opened visible hidden"
      );
    }
  }

  if ($(".sort-block").length > 0) {
    $(".sort-block").on("click", function () {
      if ($(this).hasClass("opened")) {
        $(this)
          .removeClass("opened")
          .find(".sort-block__list")
          .stop()
          .slideUp();
      } else {
        let self = $(this);

        self.addClass("opened").find(".sort-block__list").stop().slideDown();

        $(document).mouseup(function (e) {
          if (!self.is(e.target) && self.has(e.target).length === 0) {
            self
              .removeClass("opened")
              .find(".sort-block__list")
              .stop()
              .slideUp();
          }
        });
      }
    });
  }

  if ($(".slider-products-wrapper").length > 0) {
    const swiperSmall = new Swiper(".slider-products__small", {
      direction: "vertical",
      spaceBetween: 5,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".slider-products__left .swiper-button-next",
        prevEl: ".slider-products__left .swiper-button-prev",
      },
      breakpoints: {
        0: {
          spaceBetween: 5,
          slidesPerView: 2,
          direction: "horizontal",
        },
        390: {
          spaceBetween: 5,
          slidesPerView: 3,
          direction: "horizontal",
        },
        479: {
          spaceBetween: 5,
          slidesPerView: 3,
          direction: "vertical",
        },
      },
    });

    const swiperBig = new Swiper(".slider-products__big", {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: swiperSmall,
      },
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
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

  if ($("[data-aos]").length > 0) {
    if ($(window).width() < 1280) {
      AOS.init({
        disable: true,
      });
    } else {
      AOS.init();
    }
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
