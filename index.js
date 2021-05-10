const baseURL = 'http://localhost:3000'
const flashcardsURL = baseURL + '/flashcards'

const cardsDiv = document.getElementById('card-list')

const form = document.getElementById('flashcard-form')
const questionInput = document.getElementById('question-input')
const answerInput = document.getElementById('answer-input')
const topicInput = document.getElementById('topic-input')

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event){
  event.preventDefault()
  FlashcardApi.createFlashcard()
  form.reset()
}

FlashcardApi.getFlashcards()
TopicApi.getTopics()