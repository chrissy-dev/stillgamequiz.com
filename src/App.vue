<template lang="html">
<div id="app" class="flex flex-col justify-between min-h-screen">
    <AppHeader v-if="state.init"></AppHeader>
    <main class="px-4 w-full max-w-lg mx-auto self-start flex-grow">
      <Start v-if="!state.init"></Start>
      <div v-else>
        <Quiz v-if="!state.isFinished" /></Quiz>
        <Results v-if="state.isFinished" /></Results>
        <TimeUp v-if="state.timeUp" /></TimeUp>
      </div>
    </main>
      <footer class="flex items-center justify-between p-4 border-t text-xs text-gray-500">
    <p>This website is not affiliated, associated, authorised, endorsed by, or in any way officially connected with Still Game. It's just a bit of fun.</p>
  </header>
</div>
</template>

<script>
import Quiz from "./views/Quiz.vue";
import Results from "./views/Results.vue";
import TimeUp from "./views/TimeUp.vue";
import Start from "./views/Start.vue";
import Header from "./components/Header.vue";

export default {
  name: "StillGameQuiz",
  components: {
    AppHeader: Header,
    Quiz,
    Results,
    TimeUp,
    Start
  },
  data() {
    return {
      state: this.$root.$data
    };
  }
};
</script>

