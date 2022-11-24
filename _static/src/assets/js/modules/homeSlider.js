/*==============================================================
homeSlider
・Worksのスライダー
==============================================================*/
import Splide from "../external/splide.min.js";
import { SlideNumber } from "./slideNumber";

// import Splide from "@splidejs/splide";
// import { SlideNumber } from "./slideNumber";

// Worksのスライダー
var splide = new Splide("#js-slider-works", {
  type: "slide",
  speed: 400,
  flickPower: 500,
  drag: "true",
  snap: true,
  padding: "0%",
  fixedWidth: "90.9%",
  gap: "7.272%",
  perPage: 1,
  perMove: 1,
  wheel: false,
  mediaQuery: "min",
  releaseWheel: false,
  trimSpace: false,
  arrows: true,
  updateOnMove: false,
  pagination: false,
  breakpoints: {
    769: {
      drag: true,
      perPage: 1,
      speed: 250,
      // fixedWidth: "34.615%",
      fixedWidth: "24.615%",
      gap: "3.846%",
      focus: "center",
      trimSpace: "false",
    },
  },
});

splide.mount({ SlideNumber });
