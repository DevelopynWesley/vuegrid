<template>
  <div id="app" class="main_app">
    <table class="main_table">

        <tr class="grid_row">
        
            <td class= "grid_col" onclick="setTime()"><Clock/></td>
            <td class= "grid_col"><LoginForm class="component"/></td>
            <td class= "grid_col"><Quiz/></td>
        
        
        </tr>
        <br>
        <tr class="grid_row">
        
            <td class= "grid_col"><NameList class="NameList"/></td>
            <td class= "grid_col"><AddToListForm/></td>
            <td class= "grid_col"><ShopList/></td>
        
        </tr>
        <br>
        <tr class="grid_row">
        
            <td class= "grid_col"><SearchBar/></td>
            <td class= "grid_col"><ListOrGrid/></td>
            <td class= "grid_col"><Ball/></td>
        
        </tr>
        
        
    </table>
  </div>  
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import LoginForm from './components/LoginForm.vue'
import NameList from './components/List.vue'
import AddToListForm from './components/AddToListForm.vue'
import Clock from './components/Clock.vue'
import ShopList from './components/ShopList.vue'
import ListOrGrid from './components/ListOrGrid.vue'
import Quiz from './components/Quiz.vue'
import Ball from './components/MagicBall.vue';

export default {
  name: 'App',
  el: '#app',
  components: {
    // HelloWorld
    SearchBar,
    LoginForm,
    NameList,
    AddToListForm,
    Clock,
    ShopList,
    ListOrGrid,
    Quiz,
    Ball
  },

  data(){

},

}
</script>

<style>
#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 21rem;  
}
.main_table{
  min-height: 33%;
}
.grid_col{
  /* min-height: 33%; */
  width: 5rem;
  max-width: 25rem;
  min-width: 25rem;
}

</style>
