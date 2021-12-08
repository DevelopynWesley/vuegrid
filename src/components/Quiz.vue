<template>
  <div class="Quiz">
    <div class="question-one" v-show="Q1 == null">
      <p>Is 5 &lt; 10?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id="Q1-1" value="1" v-model="Q1" />
      <label for="Q1-2">No</label>
      <input type="radio" id="Q1-2" value="2" v-model="Q1" />
    </div>

    <div class="question-two" v-show="Q2 == null && Q1 != null">
      <p>Is 10 &lt; 5?</p>
      <label for="Q2-1">Yes</label>
      <input type="radio" id="Q2-1" value="1" v-model="Q2" />

      <label for="Q2-2">No</label>
      <input type="radio" id="Q2-2" value="2" v-model="Q2" />
    </div>

    <div class="question-three" v-show="Q3 == null && Q2 != null">
      <p>Is 10 &lt; 15?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id="Q3-1" value="1" v-model="Q3" />
      <label for="Q1-2">No</label>
      <input type="radio" id="Q3-2" value="2" v-model="Q3" />
    </div>

    <div class="question-four" v-show="Q4 == null && Q3 != null">
      <p>Is 15 &lt; 10?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id="Q4-1" value="1" v-model="Q4" />
      <label for="Q1-2">No</label>
      <input type="radio" id="Q4-2" value="2" v-model="Q4" />
    </div>
    <div class="Passed" v-show="Q4 != null && Passed == true">
      <p>YOU PASSED</p>
    </div>
    <div class="Passed" v-show="Q4 != null && Passed == false">
      <p>YOU FAILED.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizList",
  data: function () {
    return {
      Passed: false,
      time: null,
      interval: null,
      Q1: null,
      Q2: null,
      Q3: null,
      Q4: null,
      soundUrl:
        "http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3",
    };
  },

  methods: {
    checkQuiz() {
      if (this.Q1 == 1 && this.Q2 == 2 && this.Q3 == 1 && this.Q4 == 2) {
        this.Passed = true;
        let beep = new Audio(this.soundUrl);
        beep.play();
      }
    },
  },
  watch: {
    Q4: function () {
      this.checkQuiz();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Quiz {
  padding: 0%;
  margin-top: 30%;
}
</style>
