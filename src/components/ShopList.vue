<template>

  <div class="shop-list">
    <h1>ORDER</h1>

    <table class="shop-table">
      <tr class="shop-row">
        <td><input type="checkbox" v-model="chkShoes" /></td>
        <td>SHOES</td>
        <td>£ {{ prcShoes }}</td>
      </tr>

      <tr class="shop-row">
        <td><input type="checkbox" v-model="chkBag" /></td>
        <td>BAG</td>
        <td>£ {{ prcBag }}</td>
      </tr>

      <tr class="shop-row">
        <td><input type="checkbox" v-model="chkJeans" /></td>
        <td>JEANS</td>
        <td>£ {{ prcJeans }}</td>
      </tr>
    </table>

    <h1>TOTAL: £{{ orderPrice }}</h1>

  </div>
</template>

<script>

export default {
  name: 'ShopList',

  components: {

  },

   methods: {
     
  },

  computed:{

      orderPrice(){

        let orderTotal = 0;

        if(this.chkShoes){orderTotal += this.prcShoes}
        if(this.chkBag){orderTotal += this.prcBag}
        if(this.chkJeans){orderTotal += this.prcJeans}

        return orderTotal;

    }


  },

  data: function(){
     return {
      chkShoes: true,
      chkBag: true,
      chkJeans: true,
      prcShoes: 20,
      prcBag: 15,
      prcJeans: 10
        
     }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop-table {
  align-self: center;
  margin-left: 30%;
  width: 40%;
}
.shop-row {
  text-align: center;
  border: 3px solid black;
}
tr {
  border: 3px solid blue;
  text-align: center;
  align-content: center;
  align-items: center;
}
td{
  text-align: left;

}
/* td{
  text-align: center;
  border: 1px solid aqua;
} */
</style>
