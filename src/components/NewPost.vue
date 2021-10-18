<template>
  <div class="center">
    <div class="inputForm">
      <h2>Create new post</h2>
      <input v-model="post.title" type="text" placeholder="username" />
      <input v-model="post.image" type="text" placeholder="image" />
      <input v-model="post.description" type="text" placeholder="description" />
      <button @click="create">Create post</button>
      <h3 v-if="error.length > 0">
        {{ error }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {
      post: {
        title: "",
        image: "",
        description: "",
      },
      error: "",
    };
  },
  methods: {
    create() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.post.secretKey = user.secret

      this.error = ""
      if (
        this.post.title.length < 3 ||
        this.post.image.length < 3 ||
        this.post.description.length < 3
      ) {
        return (this.error = "Error in length of inputs");
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      };

      fetch("http://167.99.138.67:1111/createpost", options)
        .then((response) => response.json())
        .then((data) => {
          this.error = data.message;
          if (data.success) {
            this.$router.push("/profile");
          }
          console.log(data)
        });
    },
  },
};
</script>

<style scoped></style>
