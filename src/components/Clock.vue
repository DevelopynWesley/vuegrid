<template>
  <div class="Clock">
      <p>{{time}}</p>
     
  </div>
</template>

<script>

export default {
  name: 'NameList',

  components: {


  },

  props: {
    namesprop: {
      f_name: String,
      l_name: String,
      age: Number
    }
  },

   methods: {
      checkForm() {
                this.visible = true;

            },
      delListItem(id){
        let index = this.names.map(id => id.nameId).indexOf(id)
        this.names.splice(index, 1)
      },
  },
  data: function(){
     return {
         time: null,
         interval: null,
         visible: false,
         filterstring: "",
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

  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },

   watch: {
    namesprop: function() {
      this.names.push(this.namesprop);
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
    border: 3px solid black;
}
.List{
    border: 3px solid black;
    justify-content: center;
    padding: 0.5rem;
    
}
.texter{
    text-align: center;
    width: 10rem;
}

.successBox{
    background: chartreuse;
    border: 1px solid black;
    width: 50%
}
.listNames{
  display: grid;
  padding: 0%;
  margin: 0%;
}
.nameLi{
  border: 1px solid black;
  margin: 0%;
  padding: 0%;
}

</style>
