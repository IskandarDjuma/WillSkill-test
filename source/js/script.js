import Swiper from 'swiper';


// (function () {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     slidesPerGroup: 2,
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       type: 'fraction',
//       renderFraction: function (currentClass, totalClass) {
//         return `<span class="${currentClass}"></span>of
//               <span class="${totalClass}"></span>`;
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// })();





var navMain = document.querySelector(".main-nav");
var pageToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("main-nav--nojs");
pageToggle.classList.remove("page-header__toggle--nojs");

pageToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageToggle.classList.remove("page-header__toggle--open");
    pageToggle.classList.add("page-header__toggle--close")
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageToggle.classList.remove("page-header__toggle--close");
    pageToggle.classList.add("page-header__toggle--open")
  }
});

