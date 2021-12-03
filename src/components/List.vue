<template>
  <div class="List">
    <tr class="grid-row">
      <td class="grid-col">
        <ul class="list-names">
          <li
            class="name-li"
            v-bind:key="name.nameId"
            v-for="name in this.$root.$data.shared"
          >
            {{ name.firstName }} {{ name.lastName }} {{ name.age }}
            <button class="rem-button" @click="delListItem(name)">X</button>
          </li>
        </ul>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "name-list",

  props: {
    namesprop: [
      {
        f_name: String,
        l_name: String,
        age: Number,
      },
    ],
  },

  data: function () {
    return {
      visible: false,
      filterstring: "",

      newName: [
        {
          nameId: 0,
          firstName: "1",
          lastName: "2",
          age: 25,
        },
      ],

      names: [
        {
          nameId: 1001,
          firstName: "Wesley",
          lastName: "Barrett",
          age: 27,
        },
        {
          nameId: 1002,
          firstName: "Lewis",
          lastName: "Howl",
          age: 26,
        },
      ],
    };
  },

  methods: {
    checkForm() {
      this.visible = true;
    },

    delListItem(id) {
      let index = this.names.map((id) => id.nameId).indexOf(id);
      this.$root.$data.shared.splice(index, 1);
    },

    updateData(variable) {
      this.newName[0].nameId = 2323;
      this.newName[0].firstName = variable[0];
      this.newName[0].lastName = variable[1];
      this.newName[0].age = variable[2];

      this.names.push(this.newName[0]);

      let vari = variable;
      console.log(vari);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List {
  justify-content: center;
  border: 2px solid black;
  padding: 0%;
  margin: 0%;
  height: 7rem;
}
.list-names {
  padding: 0%;
  margin: 0%;
  list-style-type: none;
}
.name-li {
  margin: 0;
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
  border: 1px solid aqua;
}
.grid-row {
  height: 5rem;
  padding: 0%;
  margin: 0%;
}
li {
  border: 1px solid black;
  width: inherit;
  list-style-type: none;
}
.grid-col {
  width: 100%;
  padding: 0%;
  margin: 0%;
}
.rem-button {
  text-align: right;
  float: right;
}
</style>
