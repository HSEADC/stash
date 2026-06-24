import p1 from '../images/1.svg'
import p2 from '../images/2.svg'
import p3 from '../images/3.svg'
import p4 from '../images/4.svg'
import p5 from '../images/5.svg'
import p6 from '../images/6.svg'
import p7 from '../images/7.svg'
import p8 from '../images/8.svg'
import p9 from '../images/9.svg'
import p10 from '../images/10.svg'
import p11 from '../images/11.svg'
import p12 from '../images/12.svg'
import p13 from '../images/13.svg'
import p14 from '../images/14.svg'
import p15 from '../images/15.svg'
import p16 from '../images/16.svg'
import p17 from '../images/17.svg'
import p18 from '../images/18.svg'
import p19 from '../images/19.svg'
import p20 from '../images/20.svg'

const allPieces = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20
]
const totalPieces = allPieces.length // 20
const container = document.getElementById('puzzle-container')
const winMessage = document.getElementById('win-message')

let positions = Array.from({ length: totalPieces }, (_, i) => i)

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

let draggedIndex = null

function renderPuzzle() {
  container.innerHTML = ''

  positions.forEach((pieceId, index) => {
    const pieceDiv = document.createElement('div')
    pieceDiv.className = 'puzzle-piece'
    pieceDiv.draggable = true
    pieceDiv.dataset.currentIndex = index

    const img = document.createElement('img')
    img.className = 'piece-img'
    img.src = allPieces[pieceId]
    img.alt = `Фрагмент ${pieceId + 1}`

    pieceDiv.appendChild(img)
    container.appendChild(pieceDiv)
  })

  if (positions.every((val, idx) => val === idx)) {
    winMessage.classList.remove('hidden')
  } else {
    winMessage.classList.add('hidden')
  }

  attachDragEvents()
}

function attachDragEvents() {
  const pieces = document.querySelectorAll('.puzzle-piece')

  pieces.forEach((piece) => {
    piece.addEventListener('dragstart', handleDragStart)
    piece.addEventListener('dragend', handleDragEnd)
    piece.addEventListener('dragover', handleDragOver)
    piece.addEventListener('dragleave', handleDragLeave)
    piece.addEventListener('drop', handleDrop)
  })
}

function handleDragStart(e) {
  draggedIndex = parseInt(e.target.dataset.currentIndex)
  e.target.classList.add('dragging')
  e.dataTransfer.effectAllowed = 'move'
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging')
  document
    .querySelectorAll('.puzzle-piece')
    .forEach((el) => el.classList.remove('drag-over'))
}

function handleDragOver(e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
  e.target.closest('.puzzle-piece')?.classList.add('drag-over')
}

function handleDragLeave(e) {
  e.target.closest('.puzzle-piece')?.classList.remove('drag-over')
}

function handleDrop(e) {
  e.preventDefault()
  const targetPiece = e.target.closest('.puzzle-piece')
  if (!targetPiece) return

  targetPiece.classList.remove('drag-over')
  const targetIndex = parseInt(targetPiece.dataset.currentIndex)

  if (draggedIndex === targetIndex || draggedIndex === null) return
  ;[positions[draggedIndex], positions[targetIndex]] = [
    positions[targetIndex],
    positions[draggedIndex]
  ]

  renderPuzzle()
}

shuffle(positions)
renderPuzzle()
