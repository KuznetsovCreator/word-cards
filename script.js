// Массив английских слов
let englishWords = ['pen', 'pineapple', 'apple']

// Массив русских слов
let russianWords = ['ручка', 'ананас', 'яблоко']

// Получаем контейнер для карточек
const wordsContainer = document.getElementById('wordsContainer')

// Кнопка для добавления новой карточки
const addCardButton = document.getElementById('addCardButton')

// Генерация карточки
function createCard(englishWord, russianWord) {
  let wordCard = document.createElement('div')
  let wordCardHTML =
    '<h3>' + englishWord + '</h3>' + '<p>' + russianWord + '</p>'
  wordCard.innerHTML = wordCardHTML
  wordsContainer.appendChild(wordCard)
}

// Добавление карточки
function addCard() {
  let englishWordInput = document.getElementById('englishWordInput')
  let russianWordInput = document.getElementById('russianWordInput')

  if (englishWordInput.value !== '' && russianWordInput.value !== '') {
    createCard(englishWordInput.value, russianWordInput.value)
  } else {
    alert('Форма не заполнена!')
  }

  englishWordInput.value = ''
  russianWordInput.value = ''
}

// Отображение карточек
function displayCards() {
  for (let i = 0; i < englishWords.length; i++) {
    createCard(englishWords[i], russianWords[i])
  }
}

// Добавляем слушатель клика на кнопку
addCardButton.addEventListener('click', addCard)

// Вызов функции отображения карточек при загрузке сайта
displayCards()
