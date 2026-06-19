/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var burgerButton = document.querySelector('.MobileBurger img:nth-child(2)');
  var menu = document.querySelector('.MainMenuNav');
  if (burgerButton && menu) {
    burgerButton.onclick = function () {
      menu.classList.toggle('active');
    };
  }
  var slider = document.querySelector('.C_OurPics');
  var dots = document.querySelectorAll('.Dot');
  if (slider && dots.length > 0) {
    slider.addEventListener('scroll', function () {
      var scrollLeft = slider.scrollLeft;
      var width = slider.clientWidth;
      var index = Math.round(scrollLeft / width);
      dots.forEach(function (dot) {
        return dot.classList.remove('active');
      });
      if (dots[index]) {
        dots[index].classList.add('active');
      }
    });
  }
  document.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('loading', 'lazy');
  });
  var nav = document.querySelector('.C_FullMenuStyles');
  if (nav) {
    nav.addEventListener('click', function (e) {
      var menuItem = e.target.closest('[class^="M_BigStyle"]');
      if (!menuItem) return;
      var targetId = menuItem.dataset.target;
      if (!targetId) return;
      var targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      var offset = 30;
      var elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      var offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  }
});
/******/ })()
;