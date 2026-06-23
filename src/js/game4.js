document.addEventListener('DOMContentLoaded', () => {
  const nicknameText = document.getElementById('nicknameText')
  const nicknameScore = document.getElementById('nicknameScore')
  const statusText = document.getElementById('statusText')
  const signatureText = document.getElementById('signatureText')
  const generateBtn = document.getElementById('generateBtn')
  const resetBtn = document.getElementById('resetBtn')

  const partsStart = [
    'ЛамП',
    'кибер',
    'мяу',
    'xX',
    'глитч',
    'нн',
    'КрИп',
    '404',
    'vamp',
    'лол',
    'Тролль',
    'Хакер',
    'Пиксель',
    'Байт',
    '0x',
    'Кот',
    'Андед',
    'Спектр',
    'Мут',
    'Флуд'
  ]
  const partsMiddle = [
    'ов@',
    'ушк',
    '_нн',
    'Rш',
    'zZ',
    'чик',
    '0чк',
    '_web',
    'пикс',
    '_x',
    'у4к',
    '0n',
    '_к0т',
    'Zzz',
    'чип',
    'м@н',
    'та',
    'кр@б',
    '_ву',
    'ХЗ'
  ]
  const partsEnd = [
    '4а',
    '666',
    '2007',
    '_ru',
    'чка',
    'xX',
    '!!!',
    '89',
    'ня',
    '_top',
    'б0т',
    'мол',
    'f4n',
    'я_',
    '1999',
    '3000',
    '_bI',
    'л0л',
    'у4а',
    'XxX'
  ]
  const symbols = ['@', '_', '.', 'x', 'X', '0', '4', '7', '#', '$', '&']

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  function randomUpperLower(text) {
    return text
      .split('')
      .map((ch) => (Math.random() > 0.5 ? ch.toUpperCase() : ch.toLowerCase()))
      .join('')
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function rateNickname(nick) {
    let score = 0
    if (nick.includes('@')) score += 10
    if (nick.includes('_')) score += 5
    if (nick.includes('666')) score += 20
    if (nick.includes('404')) score += 20
    if (nick.includes('xX')) score += 8
    if (nick.includes('!')) score += 6
    if (nick.length > 12) score += 10
    if (nick.length < 6) score += 5
    if (/[A-Z]/.test(nick) && /[a-z]/.test(nick)) score += 8
    if (/\d/.test(nick)) score += 7
    if (nick.includes('_') && nick.includes('@')) score += 5
    if (nick.includes('2007') || nick.includes('1999')) score += 15
    if (nick.includes('XxX') || nick.includes('xXx')) score += 10
    return Math.min(score, 100)
  }

  function generateStatus(nick) {
    const statuses = [
      'онлайн',
      'невидимка',
      'афк',
      'играю в Doom',
      'жру попкорн',
      'чиню модем',
      'скачиваю MP3',
      'пишу в гостевой',
      'плачу на аську',
      'жду ответа',
      'залипаю в паинте',
      'смотрю флеш-ролик'
    ]
    return randomItem(statuses)
  }
  function generateSignature(nick) {
    const signatures = [
      '~ ℓσνє ιѕ αи ιℓℓυѕιση ~',
      '₪ я нє ςρє∂ηιй, я - тωσιηкš ₪',
      '♥ ƒяєє∂σм ιѕ мιηє ♥',
      '© 2006 все права защищены',
      'ɢʟɪᴛᴄʜ ɪɴ ᴛʜᴇ ᴍᴀᴛʀɪx',
      '我只想要自由',
      '₪ ₪ ₪ ₪ ₪',
      'люблю печеньки 🍪',
      'никнейм создан генератором 2009',
      'я не робот, я – человек-паук'
    ]
    return randomItem(signatures)
  }

  function generateNickname() {
    let nick =
      randomItem(partsStart) + randomItem(partsMiddle) + randomItem(partsEnd)

    if (Math.random() > 0.4) {
      nick += randomItem(symbols) + randomInt(1, 999)
    }

    nick = randomUpperLower(nick)
    const score = rateNickname(nick)
    const status = generateStatus(nick)
    const signature = generateSignature(nick)

    nicknameText.textContent = nick
    nicknameScore.textContent = `${score}/100 🔥`
    statusText.textContent = `статус: ${status}`
    signatureText.textContent = `подпись: ${signature}`
  }

  function resetGame() {
    nicknameText.textContent = 'жми кнопку'
    nicknameScore.textContent = ''
    statusText.textContent = 'статус: не определён'
    signatureText.textContent = 'подпись: ...'
  }

  generateBtn.addEventListener('click', generateNickname)
  resetBtn.addEventListener('click', resetGame)

  generateNickname()
})
