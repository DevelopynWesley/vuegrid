import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({

  data: {

    shared: [
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
      },
    ]

  },

  render: h => h(App),
}).$mount('#app')
