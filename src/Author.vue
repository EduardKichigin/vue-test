<template>
  <div>
    <p>{{ author.name }}</p>
  </div>
</template>

<script>
import { eventEmitter } from "./main";
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  margin-top: auto;
}

p {
  color: grey;
  margin: 0;
  padding: 10px;
}
</style>