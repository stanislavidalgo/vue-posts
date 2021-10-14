<template>
  <div class="post">
    <img :src="post.image" alt="">
    <h1>{{post.title}}</h1>
    <h3>{{post.description}}</h3>
    <h4>{{post.username}}</h4>
  </div>
</template>

<script>
export default {
    props:['post']
};
</script>

<style scoped>
    .post{
        width:250px;
        margin: 10px;
        overflow: hidden;
    }

    .post img {
        width:250px;
    }
</style>
