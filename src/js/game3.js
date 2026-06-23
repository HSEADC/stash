document.addEventListener('DOMContentLoaded', () => {
  let currentColor = '#000000'

  const canvas = document.querySelector('.canva-paint')
  if (!canvas) {
    console.error('Canvas not found')
    return
  }
  const ctx = canvas.getContext('2d')

  let drawing = false
  let lastX, lastY

  const colorButtons = document.querySelectorAll('.color-button')
  colorButtons.forEach((div) => {
    div.addEventListener('click', () => {
      const color = window.getComputedStyle(div).backgroundColor
      setColor(color)
    })
  })

  function setColor(color) {
    currentColor = color
    ctx.strokeStyle = currentColor
  }

  ctx.lineWidth = 15
  ctx.lineCap = 'round'
  ctx.globalCompositeOperation = 'source-over'

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect()

    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    drawing = true
    const { x, y } = getCanvasCoords(e)
    lastX = x
    lastY = y

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
  })

  document.addEventListener('mousemove', (e) => {
    if (!drawing) return
    const { x, y } = getCanvasCoords(e)
    ctx.lineTo(x, y)
    ctx.stroke()
  })

  document.addEventListener('mouseup', () => {
    drawing = false
  })

  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault()
    const touch = e.touches[0]
    const { x, y } = getCanvasCoords(touch)
    drawing = true
    lastX = x
    lastY = y
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
  })

  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault()
    if (!drawing) return
    const touch = e.touches[0]
    const { x, y } = getCanvasCoords(touch)
    ctx.lineTo(x, y)
    ctx.stroke()
  })

  canvas.addEventListener('touchend', () => {
    drawing = false
  })
})
