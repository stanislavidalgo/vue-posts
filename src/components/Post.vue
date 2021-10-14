<template>
  <div class="post">
    <img @click="singlePost" :src="post.image" alt="">
    <h1>{{post.title}}</h1>
    <h3>{{post.description}}</h3>
    <h4 @click="userPosts">{{post.username}}</h4>
  </div>
</template>

<script>
export default {
    props:['post'],
    methods:{
        userPosts(){
            this.$router.push('/userPosts/'+this.post.username)
        },
        singlePost(){
            this.$router.push(`/singlePost/${this.post.username}/${this.post.id}`)
        }
    },
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
