<template>
  <div class="post">
    <img @click="singlePost" :src="post.image" alt="" />
    <h1>{{ post.title }}</h1>
    <h3>{{ post.description }}</h3>
    <h4 @click="userPosts">{{ post.username }}</h4>
    <div v-if="myPost">
      <button @click="edit">EDIT</button>
      <button @click="del">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    myPost() {
      const user = JSON.parse(localStorage.getItem("user"));
      return this.post.username === user.name;
    },
  },
  methods: {
    userPosts() {
      this.$router.push("/userPosts/" + this.post.username);
    },
    singlePost() {
      this.$router.push(`/singlePost/${this.post.username}/${this.post.id}`);
    },
    del() {
      const user = JSON.parse(localStorage.getItem("user"));

      const data = {
        secretKey: user.secret,
        id: this.post.id,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      fetch("http://167.99.138.67:1111/deletepost", options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.go(this.$router.currentRoute);
        });
    },
    edit(){
      localStorage.setItem("editpost",JSON.stringify(this.post))
      this.$router.push('/edit')
    }
  },
};
</script>

<style scoped>
.post {
  width: 250px;
  margin: 10px;
  overflow: hidden;
}

.post img {
  width: 250px;
}
</style>
