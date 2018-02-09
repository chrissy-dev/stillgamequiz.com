<template>
<div class="center vh-100 w-100 w-50-l pa4 tc">
  <img clas="db" src="/static/logo-dark.svg" alt="Still Game Quiz">
  <dl class="db mv4 bg-orange pa4 white">
    <dd class="f6 f5-ns b ml0 lh-copy">You gave it a go, and ye got</dd>
    <dd class="f1 f2-ns b ml0 lh-copy">{{ state.correct }}/{{ state.questions.length }}</dd>
  </dl>
  <div class="db pv3">
    <a class="f3 db br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-navy" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.stillgamequiz.com/?utm_source=facebook">Share on Facebook</a>
  <a class="f3 db br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-blue"  href="https://twitter.com/home?status=Just%20done%20the%20Still%20Game%20Quiz,%20give%20it%20a%20go%20yersel%3A%20http%3A//www.stillgamequiz.com/?utm_source=twitter">Share on Twitter</a>
  </div>
  <button v-on:click="showAnswers = true" v-if="!showAnswers"  class="f6 br1 fw5 link pointer ph3 pv3 w-100 mb3 black" >Show wrang answers</button>
    <div v-if="showAnswers">
      <h4>You got these wrong:</h4>
      <div v-for="id in state.incorrectQuestions" class="ba mb3 pv3 ph4 b--black-10">
        <h3 class="mt0 fw6 lh-copy">{{ state.questions[id].question }}</h3>
          <p>
            Your answer: {{ state.questions[id].userAnswer }}
          </p>
          <p class="mb0">
            Correct answer: {{ state.questions[id].answer }}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      state: this.$root.$data,
      showAnswers: false
    };
  },
  mounted() {
    if (this.state.currentQuestion === 0) {
      this.$router.push("/");
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
