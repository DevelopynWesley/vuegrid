<template>
  <div class="List">

    <p>First Name:</p><input type="text" id="firstNameInput" v-model="newFirstName">
    <p>Last Name:</p><input id="lastNameInput" value="bar" v-model="newLastName">
    <p>Age:</p><input id="ageInput" type="number" value="27" v-model="newAge">
      
      <br>

      <button class="listAddButton" @click="addRecord()">ADD RECORD</button>
      
  </div>
</template>

<script>
export default {
  name: 'addListForm',
  props: ['namesprop'],

   methods: {
      addRecord(){
      
        this.newName[0].nameId = 2323;
        this.newName[0].firstName = this.newFirstName;
        this.newName[0].lastName = this.newLastName;
        this.newName[0].age = this.newAge;

        this.names.push(this.newName[0]);
        this.$root.$data.shared.push(this.newName[0]);

      }
  },
  data: function(){
     return {
         visible: false,
         newFirstName: "test",
         newLastName: "trek",
         newAge: 25,

         newName:[{
           nameId: 0,
           firstName: "1",
           lastName: "2",
           age: 25
         }],

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
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


body {
    border: 3px solid black;
}
.List{
    justify-content: center;
    padding: 0.5rem;
}
p{
  padding: 0%;
  margin: 0%;
}
</style>
