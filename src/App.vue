<template lang="html">
<div id="app" class="flex flex-col justify-between min-h-screen">
    <AppHeader></AppHeader>
    <main class="px-4 w-full max-w-lg mx-auto self-start flex-grow">
      <Quiz v-if="!state.isFinished" /></Quiz>
      <Results v-else /></Results>
    </main>
      <footer class="flex items-center justify-between p-4 border-t text-xs text-gray-500">
    <p>This website is not affiliated, associated, authorised, endorsed by, or in any way officially connected with Still Game. It's just a bit of fun.</p>
  </header>
</div>
</template>

<script>
import Quiz from "./Quiz.vue";
import Timer from "./Timer.vue";
import Results from "./Results.vue";
import Header from "./Header.vue";

export default {
  name: "HelloWorld",
  components: {
    AppHeader: Header,
    Quiz,
    Results
  },
  data() {
    return {
      state: this.$root.$data
    };
  }
};
</script>

