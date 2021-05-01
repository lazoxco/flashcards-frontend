class Topic {
  static all = []

  static topicContainer = document.getElementById('topic-container')

  constructor(id, name){
    this.id = id
    this.name = name
    this.topicBtn = document.createElement('button')

    Topic.all.push(this)
  }

  renderTopic(){
    debugger
    this.topicBtn.innerText = this.name
    return this.topicBtn
  }

  attachToDom(){
    Topic.topicContainer.append(this.renderTopic())
  }
}