class Flashcard {
  static all = []

  constructor(id, question, answer, topic_id){
    this.id = id
    this.question = question
    this.answer = answer
    this.topicId = topic_id

    this.element = document.createElement('div')
    this.element.id = `flashcard-${id}`
    this.element.classList = 'col-lg-4 col-md-6'
    // this.dataset.id = id

    Flashcard.all.push(this)
  }

  showCard(){
    this.element.innerHTML = `
    <div class='card'>
      <h2>${this.question}</h2>
    </div>
    `
    return this.element
  }

  addToDom(){
    cardsDiv.appendChild(this.showCard())
  }

}