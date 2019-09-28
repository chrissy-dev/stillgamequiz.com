<template>
<div class="pa4 tc vh-100 bg-white">
  <div class="db w-100">
    <img src="/static/logo-dark.svg" alt="Still Game Quiz" class="dib center pb4 mb3">
  </div>

  <div class="db w-100">
    <img src="/static/eminem.gif" alt="Still Game Quiz" class="dib center pb4 w-40-l">
  </div>

  <div class="db">
    <router-link class="f3 br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-black" :to="'quiz'">Begin the quiz</router-link>
  </div>

  <div class="tc mt5">
    <a href="https://www.twitter.com/scottishstoater" title="Language" class="f7 dib ph2 link mid-gray dim">a wee side project by Chris Collins</a>
  </div>

</div>
</template>

<script>
export default {
  name: 'Start',
  data() {
    return {
      state: this.$root.$data
    }
  },
  mounted() {
    // this.state.questions = this.shuffle(this.state.questions)
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
