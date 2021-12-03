<template>
  <div class="login">
    <div>
      <label class="texter" for="email">Enter your Email:</label>
      <input
        class="regentry"
        type="email"
        id="email"
        name="email"
        v-model="email"
      />
    </div>

    <div style="height: 0.5rem"></div>

    <div>
      <label class="texter" for="email">Enter your Password:</label>
      <input
        class="regentry"
        type="password"
        id="regpass"
        name="email"
        v-model="password"
      />
    </div>

    <div style="height: 0.5rem"></div>

    <div id="butcen">
      <button id="login_button" @click="checkForm()">Login</button>
    </div>

    <p class="success-box" v-if="visible">LOGIN SUCCESFUL</p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  methods: {
    checkForm() {
      if (this.email == "Test@Test.com" && this.password == "Test123") {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
  data: function () {
    return {
      visible: false,
      email: "Test@Test.com",
      password: "Test123",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  justify-content: center;
  padding: 0.5rem;
}
.texter {
  text-align: center;
  width: 10rem;
}
.success-box {
  background: chartreuse;
  border: 1px solid black;
  width: 50%;
}
</style>
