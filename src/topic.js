class Topic {
  static all = []

  static topicContainer = document.getElementById('topic-container')

  constructor(id, name){
    this.id = id
    this.name = name
    this.active = false
    this.element = document.createElement('button')
    this.element.classList = 'btn btn-link topic-btn'

    this.element.addEventListener('click', this.setActiveTopic)

    Topic.all.push(this)
  }

  cards(){
    return Flashcard.all.filter((card) => card.topicId === parseInt(this.id))
  }

  showTopic(){
    this.element.innerText = this.name
    this.element.id = `topic-${this.id}`
    return this.element
  }

  attachToDom(){
    Topic.topicContainer.append(this.showTopic())
  }

  setActiveTopic = (e) => {
    let activeTopic
    Topic.all.forEach(t => {

      if(t.element === this.element && !this.active){
        t.element.classList.add('activated')
        t.active = true
        activeTopic = t
      } else {
        t.element.classList.remove('activated')
        t.active = false
      }
    })
    Flashcard.filterByTopic(activeTopic)
  }
}