<template lang="html">
<div>{{ timer }}</div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      timer: "15:00"
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      var presentTime = this.timer;
      var timeArray = presentTime.split(/[:]+/);
      var m = timeArray[0];
      var s = this.checkSecond(timeArray[1] - 1);
      if (s == 59) {
        m = m - 1;
      }
      if (m < 0) {
        window.location = "/#/oot-ae-time";
      }
      this.timer = m + ":" + s;
      setTimeout(this.startTimer, 1000);
    },
    checkSecond(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
      } // add zero in front of numbers < 10
      if (sec < 0) {
        sec = "59";
      }
      return sec;
    }
  }
};
</script>

