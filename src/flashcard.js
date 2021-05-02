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

    Flashcard.all.push(this)
  }

  showCard(){
    this.element.innerHTML = `
    <div class='card'>
      <h2>${this.question}</h2>
      <button class="answer btn btn-light" data-id="${this.id}">View Answer</button>
    </div>
    <button class="edit btn btn-secondary" data-id="${this.id}">Edit</button>
    <button class="delete btn btn-danger" data-id="${this.id}">Delete</button>
    `
    return this.element
  }

  addToDom(){
    cardsDiv.appendChild(this.showCard())
  }

  

}