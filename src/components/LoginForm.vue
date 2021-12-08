<template>
  <div class="login">
    <div class="input-and-label">
      <label class="texter" for="email">Enter your Email:</label>
      <br />
      <input
        class="regentry"
        type="email"
        id="email"
        name="email"
        v-model="email"
      />
    </div>

    <div class="input-and-label">
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

    <p class="success-box" v-if="visible">LOGIN SUCCESSFUL</p>
    <p class="fail-box" v-if="!visible && clicked">LOGIN UNSUCCESFUL</p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  methods: {
    checkForm() {
      this.clicked = true;
      if (this.email == "Test@Test.com" && this.password == "Test123") {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
  data: function () {
    return {
      clicked: false,
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
  text-align: center;
}
.texter {
  text-align: center;
  width: 15rem;
  margin-top: 0.5rem;
}
.success-box {
  background: chartreuse;
  border: 1px solid black;
  width: 100%;
  text-align: center;
}
.fail-box {
  background: red;
  border: 1px solid black;
  width: 100%;
  text-align: center;
}
.input-and-label {
  padding-top: 0.5rem;
}
</style>
