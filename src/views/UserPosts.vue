<template>
    <div>
<Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import Post from "@/components/Post";

export default {
    name:"UserPosts",
    data(){
    return{
      posts: [],
    }
  },
  components: {
    Post
  },
  created(){
    let username = this.$route.params.username


    fetch("http://167.99.138.67:1111/getuserposts/"+username)
      .then(response => response.json())
      .then(data => {
        this.posts = data.data;
        console.log(data)
      })
  }
}
</script>

<style scoped>

</style>