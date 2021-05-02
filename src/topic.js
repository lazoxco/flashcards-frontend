class Topic {
  static all = []

  static topicContainer = document.getElementById('topic-container')

  constructor(id, name){
    this.id = id
    this.name = name
    this.topicBtn = document.createElement('button')
    this.topicBtn.classList = 'btn btn-link topic-btn'

    Topic.all.push(this)
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

  editField = (editBtn) => {
     console.log("in editFrield!!! Hello world.")
     debugger
  }
}