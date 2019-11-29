import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home); //estou a registar o componente globalmente
//o 1º parametro é o nome q vou chamar no html para chamar o componente, é o selector
//o 2º parametro é o nome do componente, e para ser importado no mai.js

new Vue({
  el: '#app',
  render: h => h(App)
})
