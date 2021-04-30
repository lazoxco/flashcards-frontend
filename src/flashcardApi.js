class FlashcardApi {
  static baseURL = 'http://localhost:3000/flashcards'

  static getFlashcards(){
    fetch(this.baseURL)
    .then(resp => resp.json())
    .then(cards => {
      
      cards.forEach(card => {
        const c = new Flashcard(card.id, card.question, card.answer, card.topic_id)
        c.addToDom()
        debugger
      })
    })
  }

  static createFlashcard(){

    fetch(this.baseURL, configObj)
    .then(resp => resp.json())
    .then(card => {
      const flashcard = card
    })
  }
}