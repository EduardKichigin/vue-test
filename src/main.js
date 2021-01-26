import Vue from 'vue'
import App from './App.vue'
import Post from './Post.vue'
import Title from './Title.vue'
import InputSearch from './InputSearch.vue'
import TextS from './TextS.vue'
import Author from './Author.vue'

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
