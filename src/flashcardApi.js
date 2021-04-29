class FlashcardApi {
  static baseURL = 'https://localhost:3000/flashcards'

  static getFlashcards(){
    fetch(this.baseURL)
    .then(resp => resp.json())
    .then(data => {
      data.forEach(card => {
        debugger
      })
    })
  }
}