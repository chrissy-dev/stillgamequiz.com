<template lang="html">
    <div id="app">
        <main class="text-center">
          <img class="w-24 mx-auto" src="../static/icon.png">
        <video autoplay loop muted playsinline class="w-full my-6">
            <source src="../static/eminem.mp4" type="video/mp4">
        </video>
        <h1 class="text-xl md:text-2xl md:text-3xl font-bold leading-tight mb-4">Ultimate Still Game Quiz</h1>
          <h2 class="text-gray-700 text-sm md:text-xl">Still Game Quiz, test your knowledge of Still Game season 1-6.</h2>

        <button type="button " class="p-4 rounded-lg text-lg bg-black text-white rounded-sm shadow w-full my-4 hover:opacity-75" v-on:click="start(answer) ">Start the quiz</button>
        </main>
    </div>
</template>

<script>
export default {
  name: "Start",
  data() {
    return {
      state: this.$root.$data
    };
  },
  methods: {
    start() {
      this.state.init = true;
    }
  }
};
</script>

