class Topic {
  static all = []

  static topicContainer = document.getElementById('topic-container')

  constructor(id, name){
    this.id = id
    this.name = name
    this.active = false
    this.topicBtn = document.createElement('button')
    this.topicBtn.classList = 'btn btn-link topic-btn'

    Topic.all.push(this)
  }

  cards(){
    return Flashcard.all.filter((card) => card.topicId === parseInt(this.id))
  }

  showTopic(){
    this.topicBtn.innerText = this.name
    this.topicBtn.id = `topic-${this.id}`
    return this.topicBtn
  }

  attachToDom(){
    Topic.topicContainer.append(this.showTopic())
  }

  addToDropDown(){
    const option = document.createElement('option')
    option.value = this.id 
    option.innerText = this.name
    topicDropdown.append(option)
  }

  addListener(){
    this.element.addEventListener('click', this.setActiveTopic)
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