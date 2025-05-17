$(document).ready(function () {
  if ($(".menu-invis-menu__arrow").length > 0) {
    $(".menu-invis-menu__arrow .arrow").on("click", function () {
      $(this)
        .toggleClass("opened")
        .parents(".menu-invis-menu__arrow")
        .siblings(".sub")
        .stop()
        .slideToggle();
    });
  }

  if ($(".header-link--arrow").length > 0) {
    $(".header-link--arrow .arrow").on("click", function () {
      $(this)
        .parents(".header-link--arrow")
        .toggleClass("opened")
        .siblings(".menu-sub")
        .stop()
        .slideToggle();
    });
  }

  if ($(".filter-application").length > 0) {
    if ($(window).width() >= 1024) {
      // можно удалить, оставил для примера
      $(".filter-row input").on("change", function () {
        openFilterApplication($(this));
      });
      //  /можно удалить, оставил для примера

      $(".filter-application__close").on("click", () =>
        closeFilterApplication()
      );
    }
  }

  if ($(".burger-mobile").length > 0) {
    let menu = $(".header-menu");
    let burger = $(".burger-mobile");
    let body = $("body");
    let overlay = $(".overlay");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.stop().slideDown();
        body.addClass("hidden");
        overlay.addClass("visible");
      }
    });

    overlay.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      }
    });

    function closeMenu() {
      burger.removeClass("opened");
      body.removeClass("hidden");
      menu.stop().slideUp();
      overlay.removeClass("visible");
      overlay.off("click");
    }
  }

  if ($(".link-menu-catalog").length > 0) {
    let burger = $(".link-menu-catalog, .burger-catalog");
    let body = $("body");
    let overlay = $(".overlay");

    burger.on("click", function () {
      let menu =
        $(window).width() >= 1280
          ? $(".invisProductCatalog--desktop")
          : $(".invisProductCatalog--mobile");

      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.stop().slideDown();

        if ($(window).width() >= 1280) {
          overlay.addClass("visible");
          body.addClass("is-openCatalogMenu");

          overlay.on("click", function () {
            closeMenu();
          });
        }
      }

      function closeMenu() {
        burger.removeClass("opened");
        body.removeClass("is-openCatalogMenu");
        menu.stop().slideUp();
        overlay.off("click");

        if ($(window).width() >= 1280) {
          overlay.removeClass("visible");
        }
      }
    });
  }

  if ($(".burger-menu").length > 0) {
    let burger = $(".burger-menu");
    let body = $("body");
    let overlay = $(".overlay");
    let menu = $(".menu-invis");
    let close = $(".menu-invis__close");

    close.on("click", function () {
      handleClick();
    });

    burger.on("click", function () {
      handleClick();
    });

    function handleClick() {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened");
        overlay.addClass("visible");
        body.addClass("is-openMenu");
        overlay.on("click", function () {
          closeMenu();
        });
      }
    }

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened");
      overlay.removeClass("visible");
      body.removeClass("is-openMenu");
      overlay.off("click");
    }

    $(window).resize(function () {
      $(window).width() < 1280 && closeMenu();
    });
  }

  if ($(".mobileDrop").length > 0) {
    $(".mobileDrop").on("click", function (event) {
      event.preventDefault();
      $(this)
        .toggleClass("opened")
        .siblings(".header-drop-invis")
        .stop()
        .slideToggle();
    });
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

  if ($(".faq-list").length > 0) {
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

  if ($(".reviews-slider.swiper").length > 0) {
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
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1550: {
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
      $(this).siblings("input").val("").trigger("keyup").focus();
      $(this).hide();
    });
  }

  if ($(".catalog-section__left").length > 0) {
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
    }

    $(".filter-mobile-head__close").on("click", closeFilter);
    $(".filter-mobile-button").on("click", toggleFilter);
    $(".overlay").on("click", closeFilter);

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

  if ($(".product-section-slider ").length > 0) {
    const swiper = new Swiper(".product-slider-more", {
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: ".product-section-slider  .btnSwiperNext ",
        prevEl: ".product-section-slider  .btnSwiperPrev",
      },
      breakpoints: {
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 3.2,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1550: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".marketplaces__item").length > 0) {
    if ($(window).width() < 1280) {
      $(".marketplaces__item").on("click", function (event) {
        event.preventDefault();
        $(this).addClass("opened");
      });

      $(document).on("click", function (event) {
        if (!$(event.target).closest(".marketplaces__item").length) {
          $(".marketplaces__item").removeClass("opened");
        }
      });
    }
  }

  if ($(".volume-card-slider").length > 0) {
    const swiper = new Swiper(".volume-card-slider", {
      slidesPerView: 2.25,
      spaceBetween: 8,
      breakpoints: {
        0: {
          slidesPerView: 2.25,
          spaceBetween: 8,
          enabled: true,
        },
        480: {
          slidesPerView: 2.1,
          spaceBetween: 8,
          enabled: true,
        },
        768: {
          enabled: false,
        },
      },
    });
  }

  if ($(".copyText").length > 0) {
    let timerCopyText = null;

    $(".copyText").on("click", function () {
      let copyText = $(this);
      navigator.clipboard.writeText(copyText.text());
      $(".copyText").removeClass("copied");
      copyText.addClass("copied");

      clearTimeout(timerCopyText);

      timerCopyText = setTimeout(function () {
        copyText.removeClass("copied");
      }, 3000);
    });
  }

  if ($(".guarantee-category__list").length > 0) {
    const swiper = new Swiper(".guarantee-category__list", {
      slidesPerView: 6,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1.55,
          spaceBetween: 10,
          enabled: true,
        },
        390: {
          slidesPerView: 2.2,
          spaceBetween: 10,
          enabled: true,
        },
        640: {
          slidesPerView: 3.2,
          spaceBetween: 10,
          enabled: true,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 20,
          enabled: true,
        },
        1024: {
          slidesPerView: 4.2,
          spaceBetween: 20,
          enabled: true,
        },
        1280: {
          enabled: false,
        },
      },
    });
  }

  if ($(".security-slider").length > 0) {
    const sliders = document.querySelectorAll(".security-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider)
            .parents(".security-section__col")
            .find(".btnSwiperNext")[0];
          navPrev = $(slider)
            .parents(".security-section__col")
            .find(".btnSwiperPrev")[0];

          pagination = $(slider)
            .parents(".security-section__col")
            .find(".swiper-pagination")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            pagination: {
              el: pagination,
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
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".filter__content").length > 0) {
    $(".filter__content .filter__search input").on("keyup", function () {
      let input = $(this);
      let inputValue = input.val().toLowerCase();
      let parents = input.parents(".filter__content");

      if (input.val().trim() !== "") {
        input.siblings(".btnClearSearch").show();
      } else {
        input.siblings(".btnClearSearch").hide();
      }

      parents.find(".check-block").each(function () {
        let labelText = $(this).find("label").text().toLowerCase();

        if (labelText.includes(inputValue)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  }
});
// application
let timerApplication = null;

function openFilterApplication(input) {
  let positionInput = input.parents(".check-block").position().top;
  let applicationBlock = $(".filter-application");

  closeFilterApplication();

  $(document).mouseup(function (e) {
    if (
      !applicationBlock.is(e.target) &&
      applicationBlock.has(e.target).length === 0
    ) {
      closeFilterApplication();
    }
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape") {
      closeFilterApplication();
    }
  });

  timerApplication = setTimeout(function () {
    applicationBlock
      .addClass("visible")
      .attr("style", `top:${positionInput}px`);
  }, 200);
}

function closeFilterApplication() {
  clearTimeout(timerApplication);
  $(".filter-application").removeClass("visible");
  $(document).off("mouseup keydown");
}
// /application

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
