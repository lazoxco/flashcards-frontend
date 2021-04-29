class FlashcardApi {
  static baseURL = 'http://localhost:3000/flashcards'

  static getFlashcards(){
    fetch(this.baseURL)
    .then(resp => resp.json())
    .then(cards => {
      cards.forEach(card => {
        console.log(card)
      })
    })
  }
}