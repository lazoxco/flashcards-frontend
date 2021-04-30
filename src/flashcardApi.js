class FlashcardApi {
  static baseURL = 'http://localhost:3000/flashcards'

  static getFlashcards(){
    fetch(this.baseURL)
    .then(resp => resp.json())
    .then(cards => {
      
      cards.forEach(card => {
        const c = new Flashcard(card.id, card.question, card.answer, card.topic_id)
        c.addToDom()
      })
    })
  }

  static createFlashcard(){

    const formData = {
      question: questionInput.value,
      answer: answerInput.value,
      topic_id: drowpdown.value
    }

    constConfigObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }

    fetch(this.baseURL, configObj)
    .then(resp => resp.json())
    .then(card => {
      const flashcard = card
    })
  }
}