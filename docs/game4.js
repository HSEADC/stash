/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var nicknameText = document.getElementById('nicknameText');
  var nicknameScore = document.getElementById('nicknameScore');
  var statusText = document.getElementById('statusText');
  var signatureText = document.getElementById('signatureText');
  var generateBtn = document.getElementById('generateBtn');
  var resetBtn = document.getElementById('resetBtn');
  var partsStart = ['ЛамП', 'кибер', 'мяу', 'xX', 'глитч', 'нн', 'КрИп', '404', 'vamp', 'лол', 'Тролль', 'Хакер', 'Пиксель', 'Байт', '0x', 'Кот', 'Андед', 'Спектр', 'Мут', 'Флуд'];
  var partsMiddle = ['ов@', 'ушк', '_нн', 'Rш', 'zZ', 'чик', '0чк', '_web', 'пикс', '_x', 'у4к', '0n', '_к0т', 'Zzz', 'чип', 'м@н', 'та', 'кр@б', '_ву', 'ХЗ'];
  var partsEnd = ['4а', '666', '2007', '_ru', 'чка', 'xX', '!!!', '89', 'ня', '_top', 'б0т', 'мол', 'f4n', 'я_', '1999', '3000', '_bI', 'л0л', 'у4а', 'XxX'];
  var symbols = ['@', '_', '.', 'x', 'X', '0', '4', '7', '#', '$', '&'];
  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function randomUpperLower(text) {
    return text.split('').map(function (ch) {
      return Math.random() > 0.5 ? ch.toUpperCase() : ch.toLowerCase();
    }).join('');
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function rateNickname(nick) {
    var score = 0;
    if (nick.includes('@')) score += 10;
    if (nick.includes('_')) score += 5;
    if (nick.includes('666')) score += 20;
    if (nick.includes('404')) score += 20;
    if (nick.includes('xX')) score += 8;
    if (nick.includes('!')) score += 6;
    if (nick.length > 12) score += 10;
    if (nick.length < 6) score += 5;
    if (/[A-Z]/.test(nick) && /[a-z]/.test(nick)) score += 8;
    if (/\d/.test(nick)) score += 7;
    if (nick.includes('_') && nick.includes('@')) score += 5;
    if (nick.includes('2007') || nick.includes('1999')) score += 15;
    if (nick.includes('XxX') || nick.includes('xXx')) score += 10;
    return Math.min(score, 100);
  }
  function generateStatus(nick) {
    var statuses = ['онлайн', 'невидимка', 'афк', 'играю в Doom', 'жру попкорн', 'чиню модем', 'скачиваю MP3', 'пишу в гостевой', 'плачу на аську', 'жду ответа', 'залипаю в паинте', 'смотрю флеш-ролик'];
    return randomItem(statuses);
  }
  function generateSignature(nick) {
    var signatures = ['~ ℓσνє ιѕ αи ιℓℓυѕιση ~', '₪ я нє ςρє∂ηιй, я - тωσιηкš ₪', '♥ ƒяєє∂σм ιѕ мιηє ♥', '© 2006 все права защищены', 'ɢʟɪᴛᴄʜ ɪɴ ᴛʜᴇ ᴍᴀᴛʀɪx', '我只想要自由', '₪ ₪ ₪ ₪ ₪', 'люблю печеньки 🍪', 'никнейм создан генератором 2009', 'я не робот, я – человек-паук'];
    return randomItem(signatures);
  }
  function generateNickname() {
    var nick = randomItem(partsStart) + randomItem(partsMiddle) + randomItem(partsEnd);
    if (Math.random() > 0.4) {
      nick += randomItem(symbols) + randomInt(1, 999);
    }
    nick = randomUpperLower(nick);
    var score = rateNickname(nick);
    var status = generateStatus(nick);
    var signature = generateSignature(nick);
    nicknameText.textContent = nick;
    nicknameScore.textContent = "".concat(score, "/100 \uD83D\uDD25");
    statusText.textContent = "\u0441\u0442\u0430\u0442\u0443\u0441: ".concat(status);
    signatureText.textContent = "\u043F\u043E\u0434\u043F\u0438\u0441\u044C: ".concat(signature);
  }
  function resetGame() {
    nicknameText.textContent = 'жми кнопку';
    nicknameScore.textContent = '';
    statusText.textContent = 'статус: не определён';
    signatureText.textContent = 'подпись: ...';
  }
  generateBtn.addEventListener('click', generateNickname);
  resetBtn.addEventListener('click', resetGame);
  generateNickname();
});
/******/ })()
;