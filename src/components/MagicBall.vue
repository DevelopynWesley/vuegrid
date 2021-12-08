<template>
  <div class="app">
    <div class="m-ball" @click="changeAnswer()">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MagicBall",

  methods: {
    changeAnswer() {
      let rand = Math.floor(Math.random() * this.answers.length);
      this.answer = this.answers[rand];
    },
  },

  data: function () {
    return {
      answer: "",
      answers: [
        "Don't Count on it.",
        "Looks Likely",
        "Maybe",
        "I don't know.",
        "Yes",
        "No",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: white;
  padding-top: 6rem;
  padding-bottom: 5rem;
  font-size: 11px;
}
.m-ball {
  background-image: url("../assets/8BALL.png");
  background-size: contain;
  width: 15rem;
  height: 15rem;
  text-align: center;
}
.app {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>