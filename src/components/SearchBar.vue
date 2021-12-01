<template>
  <div class="List">
      <div id="app">
        <input type="Text" @keydown="filterSearch()"  v-model="filterstring" placeholder="Search..."/>
            <ul class = "listNames">
              <li class = "nameLi" v-bind:key="game.gameId" v-for="game in filteredGames">{{game.gameName}}</li> 
            </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  computed:{

    filteredGames(){

      let filterstr = this.filterstring;
      return this.games.filter(game => {
        return game.gameName.toString().toLowerCase().includes(filterstr.toLowerCase());
      })

    }

  },

  data: function(){
     return {
         visible: true,
         filterstring: "",
         games: [
            {
                 gameId: 1001,
                 gameName: "Halo",

            },
            {
                gameId: 1002,
                gameName: "Resistance",
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


</style>
