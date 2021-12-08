<template>
  <div class="shop-list">
    <h1>ORDER</h1>

    <table class="shop-table">
      <ul class="list-items">
        <li class="item-li" v-bind:key="item.name" v-for="item in items">
          <tr class="shop-row">
            <td><input type="checkbox" v-model="item.check" /></td>
            <td>{{ item.name }}</td>
            <td>£ {{ item.price }}</td>
          </tr>
        </li>
      </ul>
    </table>

    <h1>TOTAL: £{{ shopPrice }}</h1>
  </div>
</template>

<script>
export default {
  name: "ShopList",

  computed: {
    shopList() {
      return this.items.filter((item) => {
        return item.check;
      });
    },
    shopPrice() {
      return this.shopList.reduce(function (total, item) {
        return total + item.price;
      }, 0);
    },
  },

  data: function () {
    return {
      items: [
        {
          name: "Shoes",
          check: this.chkShoes,
          price: 20,
        },
        {
          name: "Bag",
          check: this.chkBag,
          price: 15,
        },
        {
          name: "Jeans",
          check: this.chkJeans,
          price: 10,
        },
      ],

      chkShoes: true,
      chkBag: true,
      chkJeans: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-li {
  width: 9rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.list-items {
  padding: 0;
  margin: 0;
}
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
td {
  text-align: left;
}
</style>
