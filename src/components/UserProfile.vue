<template>
  <div class="d-flex">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "UserProfile",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Post,
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch("http://167.99.138.67:1111/getuserposts/" + user.name)
      .then((response) => response.json())
      .then((data) => {
        this.posts = data.data;
        console.log(data);
      });
  },
};
</script>

<style scoped></style>
