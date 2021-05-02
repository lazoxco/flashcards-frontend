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

    this.element.addEventListener('click', this.handleItemClick)

    Flashcard.all.push(this)
  }

  showCard(){
    this.element.innerHTML = `
    <div class="card">
      <h2 class="question">${this.question}</h2>
      <p class="answer">${this.answer}</p>
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

  handleItemClick = (e) => {
    if (e.target.innerText === "Edit"){
      this.createEditFields(e.target)
      e.target.innerText = "Save"
    } else if(e.target.innerText === "Save"){
      this.saveCard()
      e.target.innerText = "Edit"
    }
  }

  createEditFields = (editBtn) => {
    const cardDiv = this.element
    debugger
    const div = this.element.querySelector('div')
    const question = cardDiv.querySelector('.question').innerText
    const answer = cardDiv.querySelector('.answer').innerText

    div.innerHTML = `
    <input type="text" name="question" class="edit-question" value="${question}">
    <input type="text" name="answer" class="edit-answer" value="${answer}">
    `
  }

  saveCard = () => {
    debugger
  }
}