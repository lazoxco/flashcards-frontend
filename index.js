const baseURL = "http://localhost:3000"
const flashcardsURL = baseURL + '/flashcards'

const cardsDiv = document.getElementById('card-list')


fetch("http://localhost:3000/flashcards")
.then(resp => resp.json())
.then(data => showCards(data))

// function showCards(cardData){
//   const cards = cardData

  // cards.forEach(card => {
  //   const div = document.createElement('div')
  //   const cardDiv = document.createElement('div')
  //   const cardText = document.createElement('h2')

  //   div.classList.add('col-lg-4', 'col-md-6')
  //   cardDiv.classList.add('card')
  //   cardText.innerText = `${card.question}`
  //   cardDiv.appendChild(cardText)
  //   cardsDiv.appendChild(cardDiv)
  // })
  
// }