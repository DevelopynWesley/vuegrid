<template>

  <div class="mBall" @click="changeAnswer()">
      <p >{{answer}}</p>
  </div>

</template>

<script>

export default {
  name: 'MagicBall',

   methods: {
      
        changeAnswer(){
          let rand = Math.floor(Math.random() * this.answers.length)
          this.answer = this.answers[rand];
        }

      },

  data: function(){
     return {
       answer: "",
       answers:[
                "Don't Count on it.",
                "Looks Likely",
                "Maybe",
                "I don't know.",
                "Yes",
                "No",
                "Can you repeat the question?"
         ],
         
     }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  min-height: 2rem;
  color: white;
  padding-top: 7rem;
  padding-bottom: 9rem;
  /* width: 5rem; */

}

.mBall{
background-image: url("../assets/8BALL.png");
/* display: flex; */
background-size: cover;
width: 20rem;
height: 20rem;
text-align: center;


}

</style>