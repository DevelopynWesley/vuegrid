<template>
  <div class="List">
     <tr class="grid_row">
        
            <td class="grid_col">

              <ul class = "listNames">
        
                <li class = "nameLi" v-bind:key="name.nameId" v-for="name in this.$root.$data.shared" >{{name.firstName}} {{name.lastName}} {{name.age}}
                  <button class="listDelButton" @click="delListItem(name)">X</button>
                </li>
                
              </ul>
              
            </td>

        </tr>

  </div>

</template>

<script>

export default {


  
  name: 'NameList',

  props: {
    namesprop: [{
      f_name: String,
      l_name: String,
      age: Number
    }]
  },

  
  data: function(){
     return {
         visible: false,
         filterstring: "",

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

   methods: {
      checkForm() {
                this.visible = true;

            },
      delListItem(id){
        let index = this.names.map(id => id.nameId).indexOf(id)
        this.$root.$data.shared.splice(index, 1)
      },

       updateData(variable) {

        this.newName[0].nameId = 2323;
        this.newName[0].firstName = variable[0];
        this.newName[0].lastName = variable[1];
        this.newName[0].age = variable[2]

        this.names.push(this.newName[0]);



       let vari = variable;
       console.log(vari);
    }
  },

   watch: {
    namesprop: function() {
      this.names.push(this.namesprop);
      console.log("watched");
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List{
    justify-content: center;    
}
.listNames{
  padding: 0%;
  margin: 0%;
}
.nameLi{
  margin: 0;
  padding: 0;
}
.grid_row{
  height: 5rem;
}
</style>
