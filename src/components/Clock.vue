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
</style>
