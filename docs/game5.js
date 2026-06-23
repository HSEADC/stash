/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var bgElement = document.getElementById('aquariumBg');
  var bgChanger = document.getElementById('bgChanger');
  var objectsContainer = document.getElementById('aquariumObjects');
  if (!bgElement || !bgChanger || !objectsContainer) {
    console.error('❌ Ошибка: не найдены элементы аквариума. Проверьте id в HTML.');
    return;
  }
  var IMG_BASE = '../../../images/';
  var BG_LIST = ["".concat(IMG_BASE, "bg1.svg"), "".concat(IMG_BASE, "bg2.svg"), "".concat(IMG_BASE, "bg3.svg")];
  var ITEMS_CONFIG = {
    fish: {
      variants: ["".concat(IMG_BASE, "fish1.svg"), "".concat(IMG_BASE, "fish2.svg"), "".concat(IMG_BASE, "fish3.svg"), "".concat(IMG_BASE, "fish4.svg")],
      count: 4,
      defaultSize: '8%',
      positions: [[15, 30], [55, 20], [35, 65], [75, 55]]
    },
    stones: {
      variants: ["".concat(IMG_BASE, "stone1.svg"), "".concat(IMG_BASE, "stone2.svg"), "".concat(IMG_BASE, "stone3.svg"), "".concat(IMG_BASE, "stone4.svg"), "".concat(IMG_BASE, "stone5.svg")],
      count: 5,
      defaultSize: '6%',
      positions: [[10, 80], [30, 85], [55, 75], [75, 80], [92, 70]]
    },
    shells: {
      variants: ["".concat(IMG_BASE, "seashell1.svg"), "".concat(IMG_BASE, "seashell2.svg"), "".concat(IMG_BASE, "seashell3.svg"), "".concat(IMG_BASE, "seashell4.svg")],
      count: 4,
      defaultSize: '5%',
      positions: [[8, 65], [25, 55], [60, 45], [85, 60]]
    },
    seaweed: {
      variants: ["".concat(IMG_BASE, "seaweed1.svg"), "".concat(IMG_BASE, "seaweed2.svg"), "".concat(IMG_BASE, "seaweed3.svg"), "".concat(IMG_BASE, "seaweed4.svg")],
      count: 4,
      defaultSize: '7%',
      positions: [[5, 20], [20, 10], [70, 15], [90, 25]]
    },
    bubbles: {
      variants: ["".concat(IMG_BASE, "bubble1.svg"), "".concat(IMG_BASE, "bubble2.svg"), "".concat(IMG_BASE, "bubble3.svg"), "".concat(IMG_BASE, "bubble4.svg")],
      count: 4,
      defaultSize: '4%',
      positions: [[40, 10], [60, 5], [80, 20], [50, 40]]
    }
  };

  // ----- СОСТОЯНИЕ -----
  var currentBgIndex = 0;
  var allItems = [];

  // ----- ФУНКЦИИ -----
  function setBackground(index) {
    currentBgIndex = (index + BG_LIST.length) % BG_LIST.length;
    bgElement.style.backgroundImage = "url(".concat(BG_LIST[currentBgIndex], ")");
  }
  function createItem(category, variantIndex, posLeft, posTop, size) {
    var config = ITEMS_CONFIG[category];
    var variants = config.variants;
    var wrapper = document.createElement('div');
    wrapper.className = 'aquarium-item';
    wrapper.dataset.category = category;
    wrapper.dataset.variantIndex = variantIndex;
    wrapper.dataset.visible = 'true';
    var img = document.createElement('img');
    img.src = variants[variantIndex % variants.length];
    img.alt = category;
    wrapper.appendChild(img);
    wrapper.style.left = posLeft + '%';
    wrapper.style.top = posTop + '%';
    wrapper.style.width = size;
    wrapper.addEventListener('click', function (e) {
      e.stopPropagation();
      handleItemClick(wrapper);
    });
    objectsContainer.appendChild(wrapper);
    allItems.push(wrapper);
    return wrapper;
  }
  function handleItemClick(element) {
    var category = element.dataset.category;
    var config = ITEMS_CONFIG[category];
    var variants = config.variants;
    var currentIndex = parseInt(element.dataset.variantIndex);
    var isVisible = element.dataset.visible === 'true';
    if (!isVisible) {
      element.dataset.visible = 'true';
      element.style.display = 'block';
      element.dataset.variantIndex = 0;
      element.querySelector('img').src = variants[0];
      return;
    }
    var nextIndex = (currentIndex + 1) % (variants.length + 1);
    if (nextIndex === variants.length) {
      element.dataset.visible = 'false';
      element.style.display = 'none';
      element.dataset.variantIndex = variants.length;
    } else {
      element.dataset.variantIndex = nextIndex;
      element.querySelector('img').src = variants[nextIndex];
    }
  }
  function initGame() {
    objectsContainer.innerHTML = '';
    allItems.length = 0;
    Object.keys(ITEMS_CONFIG).forEach(function (category) {
      var config = ITEMS_CONFIG[category];
      var count = config.count;
      var positions = config.positions;
      var size = config.defaultSize;
      for (var i = 0; i < count; i++) {
        var pos = positions[i % positions.length];
        var variant = i % config.variants.length;
        createItem(category, variant, pos[0], pos[1], size);
      }
    });
    setBackground(0);
  }

  // ----- ОБРАБОТЧИКИ -----
  bgChanger.addEventListener('click', function (e) {
    e.stopPropagation();
    setBackground(currentBgIndex + 1);
  });

  // ----- СТАРТ -----
  initGame();
  console.log('✅ Аквариум-кликер запущен!');
});
/******/ })()
;