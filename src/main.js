import Vue from 'vue'
import App from './App.vue'
import Posts from './Posts.vue'
import Title from './Title.vue'
import InputS from './InputS.vue'
import TextS from './TextS.vue'
import AuthorS from './AuthorS.vue'

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
