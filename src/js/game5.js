import bg1 from '../images/bg1.svg'
import bg2 from '../images/bg2.svg'
import bg3 from '../images/bg3.svg'

import fish1 from '../images/fish1.svg'
import fish2 from '../images/fish2.svg'
import fish3 from '../images/fish3.svg'
import fish4 from '../images/fish4.svg'

import stone1 from '../images/stone1.svg'
import stone2 from '../images/stone2.svg'
import stone3 from '../images/stone3.svg'
import stone4 from '../images/stone4.svg'
import stone5 from '../images/stone5.svg'

import seashell1 from '../images/seashell1.svg'
import seashell2 from '../images/seashell2.svg'
import seashell3 from '../images/seashell3.svg'
import seashell4 from '../images/seashell4.svg'

import seaweed1 from '../images/seaweed1.svg'
import seaweed2 from '../images/seaweed2.svg'
import seaweed3 from '../images/seaweed3.svg'
import seaweed4 from '../images/seaweed4.svg'

import bubble1 from '../images/bubble1.svg'
import bubble2 from '../images/bubble2.svg'
import bubble3 from '../images/bubble3.svg'

document.addEventListener('DOMContentLoaded', () => {
  const backgrounds = [bg1, bg2, bg3]
  let bgIndex = 0

  const bg = document.querySelector('.aquarium-bg')
  const bgSwitch = document.querySelector('.bg-switch')

  bgSwitch.addEventListener('click', () => {
    bgIndex = (bgIndex + 1) % backgrounds.length
    bg.src = backgrounds[bgIndex]
  })

  const categories = {
    fish: [fish1, fish2, fish3, fish4],
    stone: [stone1, stone2, stone3, stone4, stone5],
    shell: [seashell1, seashell2, seashell3, seashell4],
    seaweed: [seaweed1, seaweed2, seaweed3, seaweed4],
    bubble: [bubble1, bubble2, bubble3]
  }

  document.querySelectorAll('.slot').forEach((slot) => {
    const img = slot.querySelector('img')
    const images = categories[slot.dataset.category]

    let index = 0

    slot.addEventListener('click', () => {
      index = (index + 1) % images.length
      img.src = images[index]
    })
  })
})
