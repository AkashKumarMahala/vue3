<template>
    <div>
        <button @click="loadPost()">Load posts</button>
        <h1 v-for="post in posts" :key="post"></h1>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    loadPost() {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        this.posts = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>