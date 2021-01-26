<template>
  <div id="app">
    <div class="input__wrapper">
      <InputSearch></InputSearch>
    </div>
    <div class="post__wrapper">
      <Post
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:key="todo.title"
        v-bind:author="author[i]"
      ></Post>
    </div>
  </div>
</template>

<script>
import InputSearch from "./InputSearch.vue";
import Post from "./Post.vue";
export default {
  name: "app",
  data() {
    return {
      todos: [{ id: 1, title: "", body: "", completed: false }],
      author: [{ id: 1, name: "", completed: false }],
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
    fetch("https://jsonplaceholder.typicode.com/users?_limit=9")
      .then((response) => response.json())
      .then((json) => {
        this.author = json;
      });
  },

  components: {
    Post,
    InputSearch,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 100%;
  background-color: #f2fcfc;
}

.input__wrapper {
  width: 90%;
  display: flex;
}

.post__wrapper {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>>


