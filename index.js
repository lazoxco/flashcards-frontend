const baseURL = 'http://localhost:3000'
const flashcardsURL = baseURL + '/flashcards'

const cardsDiv = document.getElementById('card-list')

FlashcardApi.getFlashcards()

const form = document.getElementById('flashcard-form')
const questionInput = document.getElementById('question')
const answerInput = document.getElementById('anwser')