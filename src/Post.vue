<template>
  <div class="posts">
    <Title v-bind:todo="todo"></Title>
    <TextS v-bind:todo="todo"></TextS>
    <Author v-bind:author="author"></Author>
  </div>
</template>

<script>
import { eventEmitter } from "./main";
import Title from "./Title.vue";
import TextS from "./TextS.vue";
import Author from "./Author.vue";

export default {
  props: ["todo", "author"],
  components: {
    Title,
    TextS,
    Author,
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 200px;
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 3px;
}
</style>>

