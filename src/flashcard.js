class Flashcard {

  static all = []

  constructor({id, question, answer, topic_id}){
    this.id = id
    this.question = question
    this.answer = answer
    this.topicId = topic_id

    this.element = document.createElement('div')
    this.element.id = `flashcard-${id}`
    this.dataset.id = id

    Flashcard.all.push(this)
  }

  renderCard(){
    this.element.innerHTML = `
    <div class='hello'>Hello World</div>
    `
    return this.element
  }
}