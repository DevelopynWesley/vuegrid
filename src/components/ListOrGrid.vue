<template>
  <div class="List">
    <div id="app">
      <div class="chk-holder">
        <input type="button" class="grid-button" @click="switchGrid" v-model="ListAndGrid" />
      </div>
      <div class="flex-container" v-show="showGrid">
        <div class="flex-row">
          <div class="flex-box">
            <img src="../assets/game.jpg" />
          </div>

          <div class="flex-box">
            <img src="../assets/resi.jpg" />
          </div>

          <div class="flex-box">
            <img src="../assets/resi2.jpg" />
          </div>
        </div>

        <div class="flex-row">
          <div class="flex-box">
            <img src="../assets/halo2.jpg" />
          </div>

          <div class="flex-box">
            <img src="../assets/Halo3.jpeg" />
          </div>

          <div class="flex-box">
            <img src="../assets/kh1.jpg" />
          </div>
        </div>

        <div class="flex-row">
          <div class="flex-box">
            <img src="../assets/kh2.png" />
          </div>

          <div class="flex-box">
            <img src="../assets/kh28.jpg" />
          </div>

          <div class="flex-box">
            <img src="../assets/knack.png" />
          </div>
        </div>
      </div>

      <ul class="listNames" v-show="!showGrid">
        <li class="nameLi" v-bind:key="game.gameId" v-for="game in games">
          {{ game.gameName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListOrGrid",

  data: function () {
    return {
      visible: true,
      filterstring: "",
      showGrid: true,
      games: [
        {
          gameId: 1001,
          gameName: "Halo: CE",
        },
        {
          gameId: 1002,
          gameName: "Resistance: Fall of Man",
        },
        {
          gameId: 1003,
          gameName: "Resistance 2",
        },
        {
          gameId: 1004,
          gameName: "Halo 2",
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
    };
  },

  computed: {
    ListAndGrid() {
      
        if(this.showGrid){
          return 'Switch To List';
        }
        else{
          return 'Switch To Grid';
        }

    },
  },

  methods: {
    switchGrid() {
      this.showGrid = !this.showGrid;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chk-holder {
  text-align: right;
}
.flex-container {
  display: flex;
  height: 13rem;
  flex-direction: column;
  min-height: 100%;
  max-height: 33%;
}
.flex-row {
  display: flex;
   height: 33%;
  
  flex-direction: row;
  min-width: 33%;
   min-height: 4rem;
   max-height: 25%; 
}
.flex-box {
  display: flex;
  width: 33%;
  height: 100%;
  min-width: 33%;
  text-align: left;
}
img {
  width: 100%;
 
}
li {
  text-align: left;
}
#app {
  display: flex;
  text-align: right;
  flex-direction: column;
  max-height: 100%;
}
.List{
  max-height: 100%;
}

.grid-button{
  width: 8rem;
}
</style>
