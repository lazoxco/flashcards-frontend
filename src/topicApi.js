class TopicApi {
  static baseURL = 'http://localhost:3000/topics'

  static getTopics(){
    fetch(this.baseURL)
    .then(resp => resp.json())
    .then(topics => {
      topics.forEach(topic => {
        console.log(topic)
      })
    })
  }
}