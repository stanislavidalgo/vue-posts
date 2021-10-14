<template>
  <div class="d-flex">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "SinglePosts",
  data() {
    return {
      posts: [],
    };
  }, 
  components: {
    Post,
  },
  created() {
    let username = this.$route.params.username;
    let id = this.$route.params.id;

    fetch(`http://167.99.138.67:1111/getsinglepost/${username}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.posts = [data.data]
        console.log(data);
      });
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
