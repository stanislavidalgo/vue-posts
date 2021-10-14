<template>
  <div class="home">
   <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Post from '../components/Post'

export default {
  name: 'Home',
  data(){
    return{
      posts: [],
    }
  },
  components: {
    Post
  },
  created(){
    fetch('http://167.99.138.67:1111/getallposts')
      .then(response => response.json())
      .then(data => {
        this.posts = data.data;
        console.log(data)
      })
  }
}
</script>

<style scoped>
.home{
  display:flex;
  flex-wrap: wrap;
}
</style>
