<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input {
  padding: 10px;
  font-size: 18px;
  border: 3px solid #525f66;
  border-radius: 5px;
  background-color: #2c3e58;
  color: white;
  margin: 5px;
}

.inputForm {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}

.inputForm button {
  padding: 10px;
  font-size: 18px;
  border: 3px solid #525f66;
  border-radius: 5px;
  background-color: #2c3e58;
  color: white;
  margin: 5px;
  cursor: pointer;
}
</style>
