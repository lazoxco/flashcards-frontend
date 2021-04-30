const baseURL = 'http://localhost:3000'
const flashcardsURL = baseURL + '/flashcards'

const cardsDiv = document.getElementById('card-list')

const form = document.getElementById('flashcard-form')
const questionInput = document.getElementById('question')
const answerInput = document.getElementById('anwser')
const topicDropdown = document.getElementById('topic')

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event){
  event.preventDefault()
  FlashcardApi.createFlashcard()
  form.reset()
}

FlashcardApi.getFlashcards()