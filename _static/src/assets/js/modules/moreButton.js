/*==============================================================
  moreButton
  ・Worksページ「もっと見るボタン」
==============================================================*/

import jQuery from "jquery";
const $ = jQuery;

// 最初に表示させておくリストの数を指定します。
var moreNum = 9;

$(".p-works-category__card:nth-child(n + " + (moreNum + 1) + ")").addClass(
  "is-hidden"
);

$(".p-works-category__btn").on("click", function () {
  $(".p-works-category__card.is-hidden")
    .slice(0, moreNum)
    .removeClass("is-hidden");
  if ($(".p-works-category__card.is-hidden").length == 0) {
    $(".p-works-category__btn").fadeOut();
  }
});

$(function () {
  var list = $(".p-works-category__card").length;
  if (list < moreNum) {
    $(".p-works-category__btn").addClass("is-btn-hidden");
  }
});
