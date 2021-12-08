<template>
  <div class="clock">
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      time: null,
      interval: null,
    };
  },

  created() {
    // update the time every second
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
};
</script>

<style scoped>
@font-face {
  font-family: digidont;
  src: url("../assets/DS-DIGI.TTF");
}
.time {
  background-color: black;
  color: greenyellow;
  font-size: 4rem;
  font-family: digidont;
  margin-top: 25%;
}
</style>
