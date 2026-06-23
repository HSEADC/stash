/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var currentColor = '#000000';
  var canvas = document.querySelector('.canva-paint');
  if (!canvas) {
    console.error('Canvas not found');
    return;
  }
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
  ctx.lineWidth = 15;
  ctx.lineCap = 'round';
  ctx.globalCompositeOperation = 'source-over';
  function getCanvasCoords(e) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }
  canvas.addEventListener('mousedown', function (e) {
    drawing = true;
    var _getCanvasCoords = getCanvasCoords(e),
      x = _getCanvasCoords.x,
      y = _getCanvasCoords.y;
    lastX = x;
    lastY = y;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
  });
  document.addEventListener('mousemove', function (e) {
    if (!drawing) return;
    var _getCanvasCoords2 = getCanvasCoords(e),
      x = _getCanvasCoords2.x,
      y = _getCanvasCoords2.y;
    ctx.lineTo(x, y);
    ctx.stroke();
  });
  document.addEventListener('mouseup', function () {
    drawing = false;
  });
  canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
    var touch = e.touches[0];
    var _getCanvasCoords3 = getCanvasCoords(touch),
      x = _getCanvasCoords3.x,
      y = _getCanvasCoords3.y;
    drawing = true;
    lastX = x;
    lastY = y;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
  });
  canvas.addEventListener('touchmove', function (e) {
    e.preventDefault();
    if (!drawing) return;
    var touch = e.touches[0];
    var _getCanvasCoords4 = getCanvasCoords(touch),
      x = _getCanvasCoords4.x,
      y = _getCanvasCoords4.y;
    ctx.lineTo(x, y);
    ctx.stroke();
  });
  canvas.addEventListener('touchend', function () {
    drawing = false;
  });
});
/******/ })()
;