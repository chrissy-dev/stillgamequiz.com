<template lang="html">
    <div id="app">
        <main v-if="!state.timeUp">
          <p class="text-gray-500 text-xs font-bold tracking-wider uppercase leading-none">Question {{ state.currentQuestion + 1 }}</p>
          <h2 class="text-2xl md:text-3xl font-bold leading-tight my-4">{{ state.questions[state.currentQuestion].question }}</h2>
          <ul v-for="answer in state.questions[state.currentQuestion].answers">
              <li><button type="button " class="p-4 text-lg bg-black text-white rounded-sm shadow w-full mb-4 hover:opacity-75" v-on:click="submitQuestion(answer) ">{{ answer }}</button></li>
          </ul>
        </main>
    </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      state: this.$root.$data
    };
  },
  methods: {
    submitQuestion(answer) {
      this.state.questions[this.state.currentQuestion].userAnswer = answer;
      if (
        String(this.state.questions[this.state.currentQuestion].answer) ===
        String(answer)
      ) {
        this.state.correct++;
      } else {
        this.state.incorrect++;
        this.state.incorrectQuestions.push(this.state.currentQuestion);
      }
      if (this.state.currentQuestion + 1 === this.state.questions.length) {
        this.state.isFinished = true;
      } else {
        this.state.currentQuestion++;
      }
    }
  }
};
</script>

