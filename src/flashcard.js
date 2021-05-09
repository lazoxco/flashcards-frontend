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
    <button class="delete btn btn-danger" data-id="${this.id}">Delete</button>
    `
    return this.element
  }

  addToDom(){
    cardsDiv.appendChild(this.showCard())
  }

  handleItemClick = (e) => {
    if(e.target.innerText === "Delete"){
      this.deleteCard()
    } else if(e.target.innerText === "View Answer"){
      this.element.querySelector('.answer').style.display = "block"
      e.target.innerText = "Hide Answer"
    } else if(e.target.innerText === "Hide Answer"){
      this.element.querySelector('p.answer').style.display = "none"
      e.target.innerText = "View Answer"
    }
  }

  deleteCard = (e) => {
    this.element.remove()
    FlashcardApi.deleteCard(this.id)
  }

 static filterByTopic(activeTopic){
   if(activeTopic){
     for(const card of Flashcard.all){
       if(card.topicId === parseInt(activeTopic.id)){
         card.element.style.display = ""
       } else {
         card.element.style.display = "none"
       }
     }
   } else {
     for(const card of Flashcard.all){
       card.element.style.display = ""
     }
   }
 }
}