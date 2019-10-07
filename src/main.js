import Vue from 'vue'
import App from './App.vue'
import Questions from './Questions'
import ShuffleArray from './utils/shuffleArray'

var state = {
  'currentQuestion': 0,
  'incorrect': 0,
  'correct': 0,
  'questions': ShuffleArray(Questions),
  'isFinished': false,
  'incorrectQuestions': [],
  'timer': '00:05',
  'timeUp': false
}

new Vue({
  el: '#app',
  data: state,
  render: h => h(App)
})
