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

;// ./src/images/1.svg
const _1_namespaceObject = __webpack_require__.p + "images/12028db698974d333b42.svg";
;// ./src/images/2.svg
const _2_namespaceObject = __webpack_require__.p + "images/01c0f5466a24997f7d0d.svg";
;// ./src/images/3.svg
const _3_namespaceObject = __webpack_require__.p + "images/41daabcf5fa2d0a78fc0.svg";
;// ./src/images/4.svg
const _4_namespaceObject = __webpack_require__.p + "images/697e91099d3f00273dda.svg";
;// ./src/images/5.svg
const _5_namespaceObject = __webpack_require__.p + "images/021473c28377feb9455e.svg";
;// ./src/images/6.svg
const _6_namespaceObject = __webpack_require__.p + "images/a475824e6e391323522f.svg";
;// ./src/images/7.svg
const _7_namespaceObject = __webpack_require__.p + "images/abe87026a206d4cbfc81.svg";
;// ./src/images/8.svg
const _8_namespaceObject = __webpack_require__.p + "images/7e5568dd7860d0268491.svg";
;// ./src/images/9.svg
const _9_namespaceObject = __webpack_require__.p + "images/07ce6d3668389fb977e8.svg";
;// ./src/images/10.svg
const _10_namespaceObject = __webpack_require__.p + "images/b01be7e5fa55a41fab5b.svg";
;// ./src/images/11.svg
const _11_namespaceObject = __webpack_require__.p + "images/4493f277c5bb86914620.svg";
;// ./src/images/12.svg
const _12_namespaceObject = __webpack_require__.p + "images/12cfd30bd3f0714854bf.svg";
;// ./src/images/13.svg
const _13_namespaceObject = __webpack_require__.p + "images/282cb3dd3d3f0a00892c.svg";
;// ./src/images/14.svg
const _14_namespaceObject = __webpack_require__.p + "images/6c15a0c489f2f1b70ce9.svg";
;// ./src/images/15.svg
const _15_namespaceObject = __webpack_require__.p + "images/85ccba69847006f94d1d.svg";
;// ./src/images/16.svg
const _16_namespaceObject = __webpack_require__.p + "images/b851b14939b7b44bc672.svg";
;// ./src/images/17.svg
const _17_namespaceObject = __webpack_require__.p + "images/31552579677536b48c8e.svg";
;// ./src/images/18.svg
const _18_namespaceObject = __webpack_require__.p + "images/4a5c4144be4878fe298e.svg";
;// ./src/images/19.svg
const _19_namespaceObject = __webpack_require__.p + "images/43acc256ceb583c4f344.svg";
;// ./src/images/20.svg
const _20_namespaceObject = __webpack_require__.p + "images/1dec5a8f7176448f021d.svg";
;// ./src/js/game6.js




















var allPieces = [_1_namespaceObject, _2_namespaceObject, _3_namespaceObject, _4_namespaceObject, _5_namespaceObject, _6_namespaceObject, _7_namespaceObject, _8_namespaceObject, _9_namespaceObject, _10_namespaceObject, _11_namespaceObject, _12_namespaceObject, _13_namespaceObject, _14_namespaceObject, _15_namespaceObject, _16_namespaceObject, _17_namespaceObject, _18_namespaceObject, _19_namespaceObject, _20_namespaceObject];
var totalPieces = allPieces.length; // 20
var container = document.getElementById('puzzle-container');
var winMessage = document.getElementById('win-message');
var positions = Array.from({
  length: totalPieces
}, function (_, i) {
  return i;
});
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
  return array;
}
var draggedIndex = null;
function renderPuzzle() {
  container.innerHTML = '';
  positions.forEach(function (pieceId, index) {
    var pieceDiv = document.createElement('div');
    pieceDiv.className = 'puzzle-piece';
    pieceDiv.draggable = true;
    pieceDiv.dataset.currentIndex = index;
    var img = document.createElement('img');
    img.className = 'piece-img';
    img.src = allPieces[pieceId];
    img.alt = "\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 ".concat(pieceId + 1);
    pieceDiv.appendChild(img);
    container.appendChild(pieceDiv);
  });
  if (positions.every(function (val, idx) {
    return val === idx;
  })) {
    winMessage.classList.remove('hidden');
  } else {
    winMessage.classList.add('hidden');
  }
  attachDragEvents();
}
function attachDragEvents() {
  var pieces = document.querySelectorAll('.puzzle-piece');
  pieces.forEach(function (piece) {
    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('dragend', handleDragEnd);
    piece.addEventListener('dragover', handleDragOver);
    piece.addEventListener('dragleave', handleDragLeave);
    piece.addEventListener('drop', handleDrop);
  });
}
function handleDragStart(e) {
  draggedIndex = parseInt(e.target.dataset.currentIndex);
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.puzzle-piece').forEach(function (el) {
    return el.classList.remove('drag-over');
  });
}
function handleDragOver(e) {
  var _e$target$closest;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  (_e$target$closest = e.target.closest('.puzzle-piece')) === null || _e$target$closest === void 0 || _e$target$closest.classList.add('drag-over');
}
function handleDragLeave(e) {
  var _e$target$closest2;
  (_e$target$closest2 = e.target.closest('.puzzle-piece')) === null || _e$target$closest2 === void 0 || _e$target$closest2.classList.remove('drag-over');
}
function handleDrop(e) {
  e.preventDefault();
  var targetPiece = e.target.closest('.puzzle-piece');
  if (!targetPiece) return;
  targetPiece.classList.remove('drag-over');
  var targetIndex = parseInt(targetPiece.dataset.currentIndex);
  if (draggedIndex === targetIndex || draggedIndex === null) return;
  var _ref2 = [positions[targetIndex], positions[draggedIndex]];
  positions[draggedIndex] = _ref2[0];
  positions[targetIndex] = _ref2[1];
  renderPuzzle();
}
shuffle(positions);
renderPuzzle();
/******/ })()
;