<template>
  <div class="center">
    <div class="inputForm">
      <h2>Login user</h2>
      <input v-model="user.name" type="text" placeholder="username" />
      <input v-model="user.password" type="password" placeholder="password" />
      <button @click="login">Login</button>
      <h3 v-if="error.length > 0">
        {{ error }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    login() {
      this.error = "";
      if (this.user.name.length < 3 || this.user.password.length < 3) {
        return (this.error = "name or password is to short");
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      };

      fetch("http://167.99.138.67:1111/login", options)
        .then((response) => response.json())
        .then((data) => {
          this.error = data.message;
          console.log(data);
          if (data.success) {
            const saveUser = {
              name: this.user.name,
              secret: data.secretKey,
            };

            localStorage.setItem("user", JSON.stringify(saveUser));
            this.$router.push("/profile");
          }
        });
    },
  },
};
</script>

<style scoped></style>
