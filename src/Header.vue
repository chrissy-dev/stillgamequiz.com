<template lang="html">
  <header class="flex items-center justify-between p-4 mb-4 border-b sticky left-0 top-0 bg-white">
    <img src="./static/logo-dark.svg" alt="Still Game Quiz" class="w-12">
    <Timer v-if="!state.isFinished"></Timer>
    <a v-else href="/" class="px-4 py-2 bg-black text-white rounded-sm shadow hover:opacity-75">Start again</a>
  </header>
</template>

<script>
import Timer from "./Timer.vue";

export default {
  name: "Header",
  components: {
    Timer
  },
  data() {
    return {
      state: this.$root.$data
    };
  }
};
</script>

