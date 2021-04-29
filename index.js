fetch("http://localhost:3000/flashcards")
.then(resp => resp.json())
.then(data => showCards(data))

function showCards(cardData){
  const cards = cardData
  debugger
}