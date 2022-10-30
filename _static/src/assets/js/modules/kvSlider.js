import jQuery from "jquery";
const $ = jQuery;

/*==============================================================
  ・TOP kvslider
==============================================================*/
const sliderThumbnail = new Swiper(".swiper-container-text", {
  slidesPerView: 1,

  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 500,
});

const mySwiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    // delay: 12000,
    disableOnInteraction: false,
  },
  speed: 500,
  thumbs: {
    swiper: sliderThumbnail,
  },
});

/*==============================================================
  ・TOP kvキャッチコピーのディレイ
==============================================================*/

$(".js-slider-text .p-home-kv__engText").each(function () {
  var letters = $(this)
    .closest(".p-home-kv__engWrap")
    .find(".p-home-kv__engText");
  var index = $(letters).index(this);
  var time = index * 0.03;
  $(this).css("animation-delay", time + "s");
});
