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
      topic_id: topicInput.value
    }

    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }
    
    fetch(this.baseURL, configObj)
    .then(resp => resp.json())
    .then(data => {
      const card = data
      const c = new Flashcard(card.id, card.question, card.answer, card.topic_id)
      c.addToDom()
    })
  }

  static deleteCard(id){
    const configObj = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    
    fetch(`${this.baseURL}/${id}`, configObj)
    .then(resp => resp.json())
    .then(json => alert(json.message))
  }
}