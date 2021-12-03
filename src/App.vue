<template>
  <div id="app" class="main_app">
    <table class="main-table">
      <tr class="grid-row">
        <td class="grid-col" onclick="setTime()"><Clock /></td>
        <td class="grid-col"><LoginForm class="component" /></td>
        <td class="grid-col"><Quiz /></td>
      </tr>
      <br />
      <tr class="grid-row">
        <td class="grid-col"><NameList class="NameList" /></td>
        <td class="grid-col"><AddToListForm /></td>
        <td class="grid-col"><ShopList /></td>
      </tr>
      <br />
      <tr class="grid-row">
        <td class="grid-col"><SearchBar class="component" /></td>
        <td class="grid-col"><ListOrGrid /></td>
        <td class="grid-col"><Ball /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import LoginForm from "./components/LoginForm.vue";
import NameList from "./components/List.vue";
import AddToListForm from "./components/AddToListForm.vue";
import Clock from "./components/Clock.vue";
import ShopList from "./components/ShopList.vue";
import ListOrGrid from "./components/ListOrGrid.vue";
import Quiz from "./components/Quiz.vue";
import Ball from "./components/MagicBall.vue";

export default {
  name: "App",
  el: "#app",
  components: {
    SearchBar,
    LoginForm,
    NameList,
    AddToListForm,
    Clock,
    ShopList,
    ListOrGrid,
    Quiz,
    Ball,
  },
};
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  border: 3px solid magenta;
  background-color: navajowhite;
}
.main-table {
    width: 100%;
}
.grid-col {
  flex-direction: row;
  border: 5px solid aqua;
}
.grid-row {
  flex-direction: row;
  border: 5px solid aqua;
  width: 100%;
  min-width: 100%;
}

.component {
  display: flex;
  flex-direction: column;
}
</style>
