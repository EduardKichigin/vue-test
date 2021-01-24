<template>
  <div id="app">
  <div class="input__wrapper">
  <InputS></InputS>
  </div>
  <div class="posts__wrapper">
   <Posts
   v-for="(todo, i) of todos"
   v-bind:todo="todo"
   v-bind:key="todo.title"
   v-bind:author="author[i]"
   ></Posts>
  </div>
  </div>
</template>

<script>
import InputS from './InputS.vue'
import Posts from './Posts.vue'
export default {
  name: 'app',
  data () {
    return {
      todos: [
        {id: 1, title: '', body: '', completed: false}
      ],
        author: [
        {id: 1, name: '', completed: false}
      ]
    }
  },

  mounted() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
  .then(response => response.json())
  .then(json => {this.todos = json})
  fetch('https://jsonplaceholder.typicode.com/users?_limit=9')
  .then(response => response.json())
  .then(json => {this.author = json})
  },

  components: {
    Posts,
    InputS
  }
}
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

.posts__wrapper {
  width: 90%;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
}

</style>>


