<template>
  <div class="List">
    
      <div id="app">
        <div class="chkHolder" >
          <input type="checkbox" v-model="showGrid"/>
          </div>
          <div class="flex-container" v-show="showGrid">

            <div class="flex-row">

              <div class="flex-box">
                <img src="../assets/game.jpg">
              </div>

                <div class="flex-box">
                    <img src="../assets/game.jpg">
                </div>

                  <div class="flex-box">
                    <img src="../assets/game.jpg">
                  </div>
            </div>

            <div class="flex-row">
                <div class="flex-box"> <img src="../assets/game.jpg"></div>
                  <div class="flex-box"> <img src="../assets/game.jpg"></div>
                    <div class="flex-box">
                       <img src="../assets/game.jpg">
                    </div>
            </div>

            <div class="flex-row">
                <div class="flex-box"><img src="../assets/game.jpg"></div>
                  <div class="flex-box"><img src="../assets/game.jpg"></div>
                    <div class="flex-box"><img src="../assets/game.jpg"></div>
            </div>

          </div>
          

            <ul class = "listNames" v-show="!showGrid">
              <li class = "nameLi" v-bind:key="game.gameId" v-for="game in games" >{{game.gameName}}
              </li>     
            </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ListOrGrid',

  components: {
  
  },

  computed:{

  },

   methods: {
      
  },
  data: function(){
     return {
         visible: true,
         filterstring: "",
         showGrid: true,
         games: [
            {
                gameId: 1001,
                gameName: "Halo: CE",
                imageUrl: '../assets/game.jpg'

            },
            {
                gameId: 1002,
                gameName: "Resistance: Fall of Man",
                 imageUrl: '../assets/game.jpg'
            },
            {
                gameId: 1003,
                gameName: "Resistance 2",
            },
            {
                gameId: 1004,
                gameName: "Halo 2"
            },
            {
                gameId: 1005,
                gameName: "Halo 3",
            },
            {
                gameId: 1006,
                gameName: "Kingdom Hearts",
            },
            {
                gameId: 1007,
                gameName: "Kingdom Hearts 2.5 HD Final ReMix",
            },
            {
                gameId: 1008,
                gameName: "Kingdom Hearts 2.8",
            },
            {
                gameId: 1009,
                gameName: "Knack",
            },
        ],
     }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.chkHolder{
  text-align: right;
  
}
.flex-container{
  display: flex;
  border: 3px solid black;
  height: 16rem;
  flex-direction: column;
  min-height: 100%;
  
}

.flex-row{
  display: flex;
  border: 1px solid black;
  height: 33%;
  widows: 33%;
  flex-direction: row;
  min-width: 33%;
  min-height: 4rem;
}

.flex-box{
  
  display: flex;
  width: 33%;
  border: 1px solid black;
  height: 100%;
  min-width: 33%;
  min-height: 3rem;
  text-align: left;
}

img{
width: 100%;
}

li{
  text-align: left;
}

</style>
