<template>
<div class="center vh-100 w-100 w-50-l pa4 tc">
  <img clas="db" src="/static/logo-dark.svg" alt="Still Game Quiz">
  <dl class="db mv4">
    <dd class="f6 f5-ns b ml0">You gave it a go, and ye got</dd>
    <dd class="f3 f2-ns b ml0">{{ state.correct }}/{{ state.questions.length }}</dd>
  </dl>

  <button v-on:click="showAnswers = true" v-if="!showAnswers">Show wrang answers</button>
  <ul id="example-1" v-if="showAnswers">
    <h4>You got these wrong:</h4>

    <li v-for="id in state.incorrectQuestions">
      {{ state.questions[id].question }}
      <div>
        <p>
          Your answer: {{ state.questions[id].userAnswer }}
        </p>
        <p>
          Correct answer: {{ state.questions[id].answer }}
        </p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Results',
  data() {
    return {
      state: this.$root.$data,
      showAnswers: false
    }
  },
  mounted() {
    if (this.state.currentQuestion === 0) {
      this.$router.push('/')
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
