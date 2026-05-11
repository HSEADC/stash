document.addEventListener('DOMContentLoaded', () => {
  function setupMenuToggle(
    triggerSelector,
    targetSelectors,
    textOpen,
    textClose
  ) {
    const trigger = document.querySelector(triggerSelector)
    if (!trigger) return

    const hiddenArticles = document.querySelectorAll(targetSelectors)

    trigger.addEventListener('click', () => {
      hiddenArticles.forEach((item) => item.classList.toggle('visible'))

      const h5 = trigger.querySelector('h5')
      if (h5) {
        h5.innerHTML = h5.innerHTML.includes('↓') ? textOpen : textClose
      }
    })
  }

  setupMenuToggle(
    '.M_BigArticle1',
    '.M_D8ArticlesWindows, .M_D9ArticlesWindows, .M_D10ArticlesWindows, .M_D11ArticlesWindows, .M_D4ArticlesWindows',
    'Странности &uarr;',
    'Странности &darr;'
  )

  setupMenuToggle(
    '.M_BigArticle2',
    '.M_D12ArticlesWindows, .M_D13ArticlesWindows, .M_D14ArticlesWindows, .M_D15ArticlesWindows, .M_D16ArticlesWindows, .M_D17ArticlesWindows, .M_D18ArticlesWindows',
    'Соцсети &uarr;',
    'Соцсети &darr;'
  )
  setupMenuToggle(
    '.M_BigArticle3',
    '.M_D19ArticlesWindows, .M_D20ArticlesWindows, .M_D21ArticlesWindows, .M_D22ArticlesWindows',
    'Артефакты &uarr;',
    'Артефакты &darr;'
  )
  setupMenuToggle(
    '.M_BigArticle4',
    '.M_D82ArticlesWindows, .M_D92ArticlesWindows, .M_D102ArticlesWindows, .M_D112ArticlesWindows, .M_D42ArticlesWindows',
    'Тесты &uarr;',
    'Тесты &darr;'
  )
  setupMenuToggle(
    '.M_BigArticle5',
    '.M_D82ArticlesWindows, .M_D92ArticlesWindows, .M_D102ArticlesWindows, .M_D112ArticlesWindows, .M_D42ArticlesWindows',
    'Марафон тгк &uarr;',
    'Марафон тгк &darr;'
  )

  const relations = [
    { button: '.M_D2ArticlesWindows', article: '.O_ArticleRead1' },
    { button: '.M_D3ArticlesWindows', article: '.O_ArticleRead2' },
    { button: '.M_D4ArticlesWindows', article: '.O_ArticleRead3' },
    { button: '.M_D5ArticlesWindows', article: '.O_ArticleRead4' },
    { button: '.M_D6ArticlesWindows', article: '.O_ArticleRead5' },
    { button: '.M_D8ArticlesWindows', article: '.O_ArticleRead7' },
    { button: '.M_D9ArticlesWindows', article: '.O_ArticleRead8' },
    { button: '.M_D10ArticlesWindows', article: '.O_ArticleRead9' },
    { button: '.M_D11ArticlesWindows', article: '.O_ArticleRead10' },
    { button: '.M_D12ArticlesWindows', article: '.O_ArticleRead6' },
    { button: '.M_D13ArticlesWindows', article: '.O_ArticleRead11' },
    { button: '.M_D14ArticlesWindows', article: '.O_ArticleRead12' },
    { button: '.M_D15ArticlesWindows', article: '.O_ArticleRead13' },
    { button: '.M_D16ArticlesWindows', article: '.O_ArticleRead14' },
    { button: '.M_D17ArticlesWindows', article: '.O_ArticleRead15' },
    { button: '.M_D18ArticlesWindows', article: '.O_ArticleRead16' },
    { button: '.M_D19ArticlesWindows', article: '.O_ArticleRead17' },
    { button: '.M_D20ArticlesWindows', article: '.O_ArticleRead18' },
    { button: '.M_D21ArticlesWindows', article: '.O_ArticleRead19' },
    { button: '.M_D22ArticlesWindows', article: '.O_ArticleRead20' }
  ]

  const allArticles = document.querySelectorAll(
    '.O_ArticleRead1, .O_ArticleRead2, .O_ArticleRead3, .O_ArticleRead4, .O_ArticleRead5, .O_ArticleRead6, .O_ArticleRead7, .O_ArticleRead8, .O_ArticleRead9, .O_ArticleRead10, .O_ArticleRead11, .O_ArticleRead12, .O_ArticleRead13, .O_ArticleRead14, .O_ArticleRead15, .O_ArticleRead16, .O_ArticleRead17, .O_ArticleRead18, .O_ArticleRead19, .O_ArticleRead20'
  )

  relations.forEach((i) => {
    const buttonName = document.querySelector(i.button)
    const articleRead = document.querySelector(i.article)

    if (buttonName && articleRead) {
      buttonName.addEventListener('click', () => {
        allArticles.forEach((article) => {
          article.style.display = 'none'
        })
        articleRead.style.display = 'block'
      })
    }
  })
})
