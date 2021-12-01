import Vue from 'vue'
import App from './App.vue'

let shared = [
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
];

shared.install = function(){
  Object.defineProperty(Vue.prototype, '$Globals', {
    get () { return shared }
  })
}
Vue.use(shared);

Vue.config.productionTip = false

new Vue({

  data: {
    
    shared : [
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
