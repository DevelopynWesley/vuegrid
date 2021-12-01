<template>
  <div class="Quiz">
    
      <p>Is 5 &lt; 10?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id = "Q1-1" value=1 v-model="Q1">

      <label for="Q1-2">No</label>
      <input type="radio" id = "Q1-2" value=2 v-model="Q1">

       <p>Is 10 &lt; 5?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id = "Q2-1" value=1 v-model="Q2">

      <label for="Q1-2">No</label>
      <input type="radio" id = "Q2-2" value=2 v-model="Q2">

       <p>Is 10 &lt; 15?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id = "Q3-1" value=1 v-model="Q3">

      <label for="Q1-2">No</label>
      <input type="radio" id = "Q3-2" value=2 v-model="Q3">

       <p>Is 15 &lt; 10?</p>
      <label for="Q1-1">Yes</label>
      <input type="radio" id = "Q4-1" value=1 v-model="Q4">

      <label for="Q1-2">No</label>
      <input type="radio" id = "Q4-2" value=2 v-model="Q4"> 

      <br> 
          
      <button @click="checkQuiz">SUBMIT</button>
     
  </div>
</template>

<script>

export default {
  name: 'QuizList',

  

  data: function(){
     return {
         time: null,
         interval: null,
         Q1: null,
         Q2: null,
         Q3: null,
         Q4: null,
         soundUrl: "http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3",

         names: [
            {
                 nameId: 1001,
                 firstName: "Wesley",
                 lastName: "Barrett",
                 age: 27   

            },
            {
                nameId: 1002,
                firstName: "Lewis",
                lastName: "Howl", 
                age: 26
            }
        ],
     }
  },

   methods: {
     

     checkQuiz(){
       if(this.Q1 == 1 && this.Q2 == 2 && this.Q3 == 1 && this.Q4 == 2){

          let beep = new Audio(this.soundUrl);
          beep.play();

       }
     }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Quiz{
  padding: 0%;
  margin: 0%;
}
</style>
