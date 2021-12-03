<template>
  <div class="shopList">
    <h1>ORDER</h1>

    <table>
      <tr>
        <td><input type="checkbox" v-model="chkShoes" /></td>
        <td>SHOES</td>
      </tr>

      <tr>
        <td><input type="checkbox" v-model="chkBag" /></td>
        <td>BAG</td>
      </tr>

      <tr>
        <td><input type="checkbox" v-model="chkJeans" /></td>
        <td>JEANS</td>
      </tr>
    </table>

    <h1>TOTAL: £{{ orderPrice }}</h1>
  </div>
</template>

<script>
export default {
  name: "ShopList",

  computed: {
    orderPrice() {
      let orderTotal = 0;

      if (this.chkShoes) {
        orderTotal += this.prcShoes;
      }
      if (this.chkBag) {
        orderTotal += this.prcBag;
      }
      if (this.chkJeans) {
        orderTotal += this.prcJeans;
      }

      return orderTotal;
    },
  },

  data: function () {
    return {
      chkShoes: true,
      chkBag: true,
      chkJeans: true,
      prcShoes: 20,
      prcBag: 15,
      prcJeans: 10,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
