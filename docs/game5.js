/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/bg1.svg
const bg1_namespaceObject = __webpack_require__.p + "images/50e483886c6990e143ae.svg";
;// ./src/images/bg2.svg
const bg2_namespaceObject = __webpack_require__.p + "images/aa9213c81ce91c8b95cf.svg";
;// ./src/images/bg3.svg
const bg3_namespaceObject = __webpack_require__.p + "images/b30fde04944df24846a8.svg";
;// ./src/images/fish1.svg
const fish1_namespaceObject = __webpack_require__.p + "images/0be0212755da0d4d7954.svg";
;// ./src/images/fish2.svg
const fish2_namespaceObject = __webpack_require__.p + "images/f1b8004db63fc53e741e.svg";
;// ./src/images/fish3.svg
const fish3_namespaceObject = __webpack_require__.p + "images/afdc4d01117d3bc959dd.svg";
;// ./src/images/fish4.svg
const fish4_namespaceObject = __webpack_require__.p + "images/1d9c0602f29bf4632339.svg";
;// ./src/images/stone1.svg
const stone1_namespaceObject = __webpack_require__.p + "images/02453f7c05bd5e590cfe.svg";
;// ./src/images/stone2.svg
const stone2_namespaceObject = __webpack_require__.p + "images/a8fe2ab5b6b660dbcaf0.svg";
;// ./src/images/stone3.svg
const stone3_namespaceObject = __webpack_require__.p + "images/c216ce7f50fff10d141c.svg";
;// ./src/images/stone4.svg
const stone4_namespaceObject = __webpack_require__.p + "images/24e42ca4b3f4499ef662.svg";
;// ./src/images/stone5.svg
const stone5_namespaceObject = __webpack_require__.p + "images/bf366a0d37d42fcdd6de.svg";
;// ./src/images/seashell1.svg
const seashell1_namespaceObject = __webpack_require__.p + "images/f7c0ad8bf3687a585055.svg";
;// ./src/images/seashell2.svg
const seashell2_namespaceObject = __webpack_require__.p + "images/fdf035ff88ee58b2ac0d.svg";
;// ./src/images/seashell3.svg
const seashell3_namespaceObject = __webpack_require__.p + "images/bc8e022687474594bf90.svg";
;// ./src/images/seashell4.svg
const seashell4_namespaceObject = __webpack_require__.p + "images/e7686677a0147b1e252c.svg";
;// ./src/images/seaweed1.svg
const seaweed1_namespaceObject = __webpack_require__.p + "images/d0915ba0e0c17817eaab.svg";
;// ./src/images/seaweed2.svg
const seaweed2_namespaceObject = __webpack_require__.p + "images/17fd8f12ba382c6761dd.svg";
;// ./src/images/seaweed3.svg
const seaweed3_namespaceObject = __webpack_require__.p + "images/8779303c54fcc6f0626a.svg";
;// ./src/images/seaweed4.svg
const seaweed4_namespaceObject = __webpack_require__.p + "images/23206739be9c06a49b0b.svg";
;// ./src/images/bubble1.svg
const bubble1_namespaceObject = __webpack_require__.p + "images/fbcd69c376dac1059219.svg";
;// ./src/images/bubble2.svg
const bubble2_namespaceObject = __webpack_require__.p + "images/53aaa263dbde293a3075.svg";
;// ./src/images/bubble3.svg
const bubble3_namespaceObject = __webpack_require__.p + "images/a2f6c984100e57b7e5bd.svg";
;// ./src/js/game5.js























document.addEventListener('DOMContentLoaded', function () {
  var backgrounds = [bg1_namespaceObject, bg2_namespaceObject, bg3_namespaceObject];
  var bgIndex = 0;
  var bg = document.querySelector('.aquarium-bg');
  var bgSwitch = document.querySelector('.bg-switch');
  bgSwitch.addEventListener('click', function () {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    bg.src = backgrounds[bgIndex];
  });
  var categories = {
    fish: [fish1_namespaceObject, fish2_namespaceObject, fish3_namespaceObject, fish4_namespaceObject],
    stone: [stone1_namespaceObject, stone2_namespaceObject, stone3_namespaceObject, stone4_namespaceObject, stone5_namespaceObject],
    shell: [seashell1_namespaceObject, seashell2_namespaceObject, seashell3_namespaceObject, seashell4_namespaceObject],
    seaweed: [seaweed1_namespaceObject, seaweed2_namespaceObject, seaweed3_namespaceObject, seaweed4_namespaceObject],
    bubble: [bubble1_namespaceObject, bubble2_namespaceObject, bubble3_namespaceObject]
  };
  document.querySelectorAll('.slot').forEach(function (slot) {
    var img = slot.querySelector('img');
    var images = categories[slot.dataset.category];
    var index = 0;
    slot.addEventListener('click', function () {
      index = (index + 1) % images.length;
      img.src = images[index];
    });
  });
});
/******/ })()
;