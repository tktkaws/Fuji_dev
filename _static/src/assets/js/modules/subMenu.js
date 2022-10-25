import jQuery from "jquery";
const $ = jQuery;

console.log("hello");
console.log("tktk");

$(function () {
  $(".test02").css("color", "red");
});

/*==============================================================
  subMenu
  ・ヘッダーのメガメニュー
==============================================================*/

$(function () {
  $(".js-submenu-trigger").hover(
    function () {
      $(this).find(".js-submenu").addClass("is-active");
      $(this).find(".js-submenu").removeClass("is-none");
    },
    function () {
      $(this).find(".js-submenu").removeClass("is-active");
      $(this).find(".js-submenu").addClass("is-none");
    }
  );
});
