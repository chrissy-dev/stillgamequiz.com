<template>
<div class="pa4 tc vh-100 bg-white">
  <div class="db w-100">
    <img src="/static/logo-dark.svg" alt="Still Game Quiz" class="dib center pb4 mb3">
  </div>

  <div class="db w-100">
    <img src="/static/oot-ae-time.gif" alt="Still Game Quiz" class="dib center pb4">
  </div>


  <h1 class="f2 b">nae points prick</h1>
  <div class="db">
    <a href="/" class="f6 link dim ph3 pv2 mb2 dib white bg-black fw6" :to="'quiz'">Start again</a>

  </div>
</div>
</template>

<script>
export default {
  name: 'Timeout',
  data() {
    return {
      state: this.$root.$data
    }
  },
  mounted() {
    this.state = null
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
