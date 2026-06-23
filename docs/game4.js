/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.querySelector('.canva-paint');
  var ctx = canvas.getContext('2d');
  var drawing = false;
  var lastX, lastY;
  var colorButtons = document.querySelectorAll('.color-button');
  colorButtons.forEach(function (div) {
    div.addEventListener('click', function () {
      var color = window.getComputedStyle(div).backgroundColor;
      setColor(color);
    });
  });
  function setColor(color) {
    currentColor = color;
    ctx.strokeStyle = currentColor;
  }
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.globalCompositeOperation = 'source-over';
  canvas.addEventListener('mousedown', function (e) {
    drawing = true;
    lastX = e.clientX - canvas.getBoundingClientRect().left;
    lastY = e.clientY - canvas.getBoundingClientRect().top;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
  function mouseMoveHandler(e) {
    if (!drawing) return;
    var x = e.clientX - canvas.getBoundingClientRect().left;
    var y = e.clientY - canvas.getBoundingClientRect().top;
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
  }
  function mouseUpHandler() {
    drawing = false;
    ctx.closePath();
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }
  document.querySelector('.window-1').addEventListener('click', function () {
    window.open('https://hseadc.github.io/dikiioguretz/', '_blank');
  });
  document.querySelectorAll('.window-2').forEach(function (el) {
    el.addEventListener('click', function () {
      window.open('https://t.me/oldweb_core', '_blank');
    });
  });
});
/******/ })()
;