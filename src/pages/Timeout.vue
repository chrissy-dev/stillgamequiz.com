<template>
<div class="pa4 tc db vh-100 bg-white">
  <div class="db w-100">
    <img src="/static/logo-dark.svg" alt="Still Game Quiz" class="dib center pb4 mb3">
  </div>

  <div class="db w-100">
    <img src="/static/oot-ae-time.gif" alt="Still Game Quiz" class="dib center pb2">
  </div>


  <h1 class="f2 mv4 db b">nae points prick</h1>
    <a href="/" class="f3 db mw6 center br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-black">Start again</a>
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
