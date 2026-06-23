document.addEventListener('DOMContentLoaded', () => {
  const bgElement = document.getElementById('aquariumBg')
  const bgChanger = document.getElementById('bgChanger')
  const objectsContainer = document.getElementById('aquariumObjects')

  if (!bgElement || !bgChanger || !objectsContainer) {
    console.error(
      '❌ Ошибка: не найдены элементы аквариума. Проверьте id в HTML.'
    )
    return
  }

  const IMG_BASE = '../../../images/'

  const BG_LIST = [
    `${IMG_BASE}bg1.svg`,
    `${IMG_BASE}bg2.svg`,
    `${IMG_BASE}bg3.svg`
  ]

  const ITEMS_CONFIG = {
    fish: {
      variants: [
        `${IMG_BASE}fish1.svg`,
        `${IMG_BASE}fish2.svg`,
        `${IMG_BASE}fish3.svg`,
        `${IMG_BASE}fish4.svg`
      ],
      count: 4,
      defaultSize: '8%',
      positions: [
        [15, 30],
        [55, 20],
        [35, 65],
        [75, 55]
      ]
    },
    stones: {
      variants: [
        `${IMG_BASE}stone1.svg`,
        `${IMG_BASE}stone2.svg`,
        `${IMG_BASE}stone3.svg`,
        `${IMG_BASE}stone4.svg`,
        `${IMG_BASE}stone5.svg`
      ],
      count: 5,
      defaultSize: '6%',
      positions: [
        [10, 80],
        [30, 85],
        [55, 75],
        [75, 80],
        [92, 70]
      ]
    },
    shells: {
      variants: [
        `${IMG_BASE}seashell1.svg`,
        `${IMG_BASE}seashell2.svg`,
        `${IMG_BASE}seashell3.svg`,
        `${IMG_BASE}seashell4.svg`
      ],
      count: 4,
      defaultSize: '5%',
      positions: [
        [8, 65],
        [25, 55],
        [60, 45],
        [85, 60]
      ]
    },
    seaweed: {
      variants: [
        `${IMG_BASE}seaweed1.svg`,
        `${IMG_BASE}seaweed2.svg`,
        `${IMG_BASE}seaweed3.svg`,
        `${IMG_BASE}seaweed4.svg`
      ],
      count: 4,
      defaultSize: '7%',
      positions: [
        [5, 20],
        [20, 10],
        [70, 15],
        [90, 25]
      ]
    },
    bubbles: {
      variants: [
        `${IMG_BASE}bubble1.svg`,
        `${IMG_BASE}bubble2.svg`,
        `${IMG_BASE}bubble3.svg`,
        `${IMG_BASE}bubble4.svg`
      ],
      count: 4,
      defaultSize: '4%',
      positions: [
        [40, 10],
        [60, 5],
        [80, 20],
        [50, 40]
      ]
    }
  }

  // ----- СОСТОЯНИЕ -----
  let currentBgIndex = 0
  const allItems = []

  // ----- ФУНКЦИИ -----
  function setBackground(index) {
    currentBgIndex = (index + BG_LIST.length) % BG_LIST.length
    bgElement.style.backgroundImage = `url(${BG_LIST[currentBgIndex]})`
  }

  function createItem(category, variantIndex, posLeft, posTop, size) {
    const config = ITEMS_CONFIG[category]
    const variants = config.variants

    const wrapper = document.createElement('div')
    wrapper.className = 'aquarium-item'
    wrapper.dataset.category = category
    wrapper.dataset.variantIndex = variantIndex
    wrapper.dataset.visible = 'true'

    const img = document.createElement('img')
    img.src = variants[variantIndex % variants.length]
    img.alt = category

    wrapper.appendChild(img)
    wrapper.style.left = posLeft + '%'
    wrapper.style.top = posTop + '%'
    wrapper.style.width = size

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation()
      handleItemClick(wrapper)
    })

    objectsContainer.appendChild(wrapper)
    allItems.push(wrapper)
    return wrapper
  }

  function handleItemClick(element) {
    const category = element.dataset.category
    const config = ITEMS_CONFIG[category]
    const variants = config.variants
    let currentIndex = parseInt(element.dataset.variantIndex)
    const isVisible = element.dataset.visible === 'true'

    if (!isVisible) {
      element.dataset.visible = 'true'
      element.style.display = 'block'
      element.dataset.variantIndex = 0
      element.querySelector('img').src = variants[0]
      return
    }

    let nextIndex = (currentIndex + 1) % (variants.length + 1)
    if (nextIndex === variants.length) {
      element.dataset.visible = 'false'
      element.style.display = 'none'
      element.dataset.variantIndex = variants.length
    } else {
      element.dataset.variantIndex = nextIndex
      element.querySelector('img').src = variants[nextIndex]
    }
  }

  function initGame() {
    objectsContainer.innerHTML = ''
    allItems.length = 0

    Object.keys(ITEMS_CONFIG).forEach((category) => {
      const config = ITEMS_CONFIG[category]
      const count = config.count
      const positions = config.positions
      const size = config.defaultSize

      for (let i = 0; i < count; i++) {
        const pos = positions[i % positions.length]
        const variant = i % config.variants.length
        createItem(category, variant, pos[0], pos[1], size)
      }
    })

    setBackground(0)
  }

  // ----- ОБРАБОТЧИКИ -----
  bgChanger.addEventListener('click', (e) => {
    e.stopPropagation()
    setBackground(currentBgIndex + 1)
  })

  // ----- СТАРТ -----
  initGame()

  console.log('✅ Аквариум-кликер запущен!')
})
