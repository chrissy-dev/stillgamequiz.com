<template lang="html">
  <div>
    <dl class="p-4 bg-green-700 text-center text-xl text-white rounded shadow">
      <dd class>You gave it a go, and ye got</dd>
      <dd class="text-4xl font-bold">{{ state.correct }}/{{ state.questions.length }}</dd>
    </dl>
    <section class="block">
      <a class="bg-blue-700 text-white p-4 rounded font-bold block my-2" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.stillgamequiz.com/?utm_source=facebook">Share on Facebook</a>
      <a class="bg-blue-400 text-white p-4 rounded font-bold block my-2" href="https://twitter.com/home?status=Just%20done%20the%20Still%20Game%20Quiz,%20give%20it%20a%20go%20yersel%3A%20http%3A//www.stillgamequiz.com/?utm_source=twitter">Share on Twitter</a>
    </section>

    <button v-on:click="showAnswers = true" v-if="!showAnswers" class="p-4 border block rounded w-full hover:bg-gray-100">Show wrang answers</button>

    <div v-if="showAnswers">
      <h4 class="text-2xl mt-4 font-bold">You got these wrong:</h4>
      <ul class="mb-4">
        <li v-for="id in state.incorrectQuestions" class="border-b py-4">
          <h3 class="font-bold mb-4">{{ state.questions[id].question }}</h3>
          <p>Your answer: {{ state.questions[id].userAnswer }}</p>
          <p>Correct answer: {{ state.questions[id].answer }}</p>
        </li>
      </ul>
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
  }
};
</script>
