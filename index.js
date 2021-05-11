const baseURL = 'http://localhost:3000'
const flashcardsURL = baseURL + '/flashcards'

const cardsDiv = document.getElementById('card-list')

const form = document.getElementById('flashcard-form')
const questionInput = document.getElementById('question-input')
const answerInput = document.getElementById('answer-input')
const topicDropdown = document.getElementById('topic-dropdown')

const bgToggle = document.getElementById('bg-toggle')
bgToggle.addEventListener('click', function(){

  // document.body.style.backgroundColor = 'blue'
  document.body.classList.toggle('change-color')
})

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event){
  event.preventDefault()
  FlashcardApi.createFlashcard()
  form.reset()
}

FlashcardApi.getFlashcards()
TopicApi.getTopics()

