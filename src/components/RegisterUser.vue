<template>
  <div class="center">
    <div class="inputForm">
      <h2>Register new user</h2>
      <input v-model="user.name" type="text" placeholder="username" />
      <input
        v-model="user.passwordOne"
        type="password"
        placeholder="password one"
      />
      <input
        v-model="user.passwordTwo"
        type="password"
        placeholder="password two"
      />
      <button @click="register">Register</button>
      <h3 v-if="error.length > 0">
        {{ error }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      user: {
        name: "",
        passwordOne: "",
        passwordTwo: "",
      },
      error: "",
    };
  },
  methods: {
    register() {
      this.error = "";
      if (this.user.name.length < 3) {
        return (this.error = "name is to short");
      }
      if (
        this.user.passwordOne !== this.user.passwordTwo ||
        this.user.passwordOne.length < 3
      ) {
        return (this.error =
          "passwords should match and be at least 3 symbols length");
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user)
      }

      fetch("http://167.99.138.67:1111/createaccount", options)
       .then(response => response.json())
       .then(data => {
         console.log(data)
       })
    },
  },
};
</script>

<style scoped></style>
