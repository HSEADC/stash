import '../stylesheets/style.css'

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.MobileBurger img:nth-child(2)')
  const menu = document.querySelector('.MainMenuNav')
  if (burgerButton && menu) {
    burgerButton.onclick = () => {
      menu.classList.toggle('active')
    }
  }

  const slider = document.querySelector('.C_OurPics')
  const dots = document.querySelectorAll('.Dot')
  if (slider && dots.length > 0) {
    slider.addEventListener('scroll', () => {
      const scrollLeft = slider.scrollLeft
      const width = slider.clientWidth
      const index = Math.round(scrollLeft / width)
      dots.forEach((dot) => dot.classList.remove('active'))
      if (dots[index]) {
        dots[index].classList.add('active')
      }
    })
  }

  document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('loading', 'lazy')
  })

  const nav = document.querySelector('.C_FullMenuStyles')
  if (nav) {
    nav.addEventListener('click', (e) => {
      const menuItem = e.target.closest('[class^="M_BigStyle"]')
      if (!menuItem) return

      const targetId = menuItem.dataset.target
      if (!targetId) return

      const targetElement = document.getElementById(targetId)
      if (!targetElement) return

      const offset = 30
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    })
  }
})
