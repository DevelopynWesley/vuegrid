<template>
  <div class="List">
    <ul class="list-names">
      <li class="name-li" v-bind:key="name.nameId" v-for="name in names">
        {{ name.firstName }} {{ name.lastName }} {{ name.age }}
        <button class="rem-button" @click="delListItem(name)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "name-list",

  props: {
    f_name: String,
    l_name: String,
    age: Number,
    fullname: String,
  },

  watch: {
    fullname: {
      // deep: true,
      handler: function () {
        this.names.push({
          firstName: this.f_name,
          lastName: this.l_name,
          age: this.age,
        });
      },
    },
  },

  data: function () {
    return {
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
    delListItem(id) {
      let index = this.names.map((id) => id.nameId).indexOf(id);
      this.names.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List {
  justify-content: center;
  padding: 0%;
  margin: 0%;
  height: 7rem;
  max-height: 100%;
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
}
li {
  width: inherit;
  list-style-type: none;
}
.rem-button {
  text-align: right;
  float: right;
}
</style>
