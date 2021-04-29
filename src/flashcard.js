class Flashcard {

  static all = []
  constructor({id, question, answer, topic_id}){
    this.id = id
    this.question = question
    this.answer = answer
    this.topic_id = topic_id

    this.element = document.createElement('div')
    this.element.id = `flashcard-${id}`
    this.element.dataset.id = id

    Flashcard.all.push(this)
  }

  createCard(){
    this.element.innerHTML = `
    <div class="col-lg-4 col-md-6">
      <div class="card">
        <h2>${this.question}</h2>
      </div>
    </div>
    `
    return this.element
  }

  attachToDom(){
    cardsDiv.appendChild(this.createCard())
  }
  debugger
}