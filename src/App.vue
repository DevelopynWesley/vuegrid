<template>
  <div id="app" class="main_app">
    <table class="main-table">
      <tr class="grid-row">
        <td class="grid-col">
          <GridBox class="grid-box">
            <Clock />
          </GridBox>
        </td>
        <td class="grid-col">
          <GridBox class="grid-box">
            <LoginForm />
          </GridBox>
        </td>
        <td class="grid-col">
          <GridBox>
            <Quiz />
          </GridBox>
        </td>
      </tr>
      <br />
      <tr class="grid-row">
        <td class="grid-col">
          <GridBox>
            <NameList :f_name = "f_name" :l_name = "l_name" :age = "age" :fullname = "f_name + l_name + age"/>
          </GridBox>
        </td>
        <td class="grid-col">
          <GridBox>
            <AddToListForm @EmitObject="PostChange" />
          </GridBox>
        </td>
        <td class="grid-col">
          <GridBox>
            <ShopList />
          </GridBox>
        </td>
      </tr>
      <br />
      <tr class="grid-row">
        <td class="grid-col">
          <GridBox>
            <SearchBar />
          </GridBox>
        </td>
        <td class="grid-col">
          <GridBox>
            <ListOrGrid />
          </GridBox>
        </td>
        <td class="grid-col">
          <GridBox>
            <Ball />
          </GridBox>
        </td>
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
import GridBox from "./components/GridBox.vue";

export default {
  name: "App",
  el: "#app",

  props: {
  
        f_name: String,
        l_name: String,
        age: Number,
 
  },
  components: {
    GridBox,
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
  methods: {
    PostChange(event) {
      this.f_name = event.firstName;
      this.l_name = event.lastName;
      this.age = event.age;
       console.log(this.age);
      // this.namesprop.push();
       
    },
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
  justify-content: center;
}
.grid-col {
  border: 3px solid black;
}
.component {
  display: flex;
  flex-direction: column;
}
.main-table{
   background-color: navajowhite;
}
</style>
