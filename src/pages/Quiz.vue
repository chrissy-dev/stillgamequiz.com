<template>
<div class="center vh-100 w-100 w-50-l pa4">
  <header>
    <div class="dt w-100">
      <div class="dtc w-50 v-mid">
        <img src="/static/logo-dark.svg" alt="Still Game Quiz">
      </div>

      <div class="dtc w-50 tr v-mid fw6">
        {{ state.currentQuestion + 1 }}/{{ state.questions.length }} <span class="black-20">|</span> {{ timer }}
      </div>
    </div>
  </header>

  <div class="center pa4 w-75-l">
    <p class="f7 tc black-30">
      Question {{ state.currentQuestion + 1 }}
    </p>
    <h2 class="lh-copy tc measure">{{ state.questions[state.currentQuestion].question }}</h2>
  </div>
  <adsense
  ad-client="ca-pub-9941566456960150"
  ad-slot="3533780820"
  ad-style="display: block; height: 100px;"
  ad-format="auto">
</adsense>

  <div class="db w-75-l center" v-for="answer in state.questions[state.currentQuestion].answers">
    <button class="f3 br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-black" type="button " v-on:click="submitQuestion(answer) ">{{ answer }}</button>
  </div>

</div>
</template>

<script>
import VueAdsense from 'vue-adsense'

export default {
  name: 'HelloWorld',
  components: {
    'adsense': VueAdsense
  },
  data() {
    return {
      state: this.$root.$data,
      timer: '15:00'
    }
  },
  mounted() {
    this.state.questions = this.shuffle(this.state.questions)
    this.startTimer()
  },
  methods: {
    shuffle(array) {
      var counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },
    submitQuestion(answer) {
      this.state.questions[this.state.currentQuestion].userAnswer = answer

      if (String(this.state.questions[this.state.currentQuestion].answer) === String(answer)) {
        this.state.correct++
      } else {
        this.state.incorrect++
          this.state.incorrectQuestions.push(this.state.currentQuestion)
      }

      if (this.state.currentQuestion + 1 === this.state.questions.length) {
        this.$router.push('results')
      } else {
        this.state.currentQuestion++
      }
    },
    startTimer() {
      var presentTime = this.timer;
      var timeArray = presentTime.split(/[:]+/);
      var m = timeArray[0];
      var s = this.checkSecond((timeArray[1] - 1));
      if (s == 59) {
        m = m - 1
      }

      if (m < 0) {
        window.location = "http://localhost:8080/#/oot-ae-time"
      }

      this.timer = m + ":" + s;
      setTimeout(this.startTimer, 1000);
    },

    checkSecond(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec
      }; // add zero in front of numbers < 10
      if (sec < 0) {
        sec = "59"
      };
      return sec;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
