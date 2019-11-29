import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', { //global directive. To call it on template is v-highlight
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green'; assim estamos a determinar o valor aqui mesmo
        // el.style.backgroundColor = binding.value; assim estamos a determinar o valor fora, no template
        var delay = 0;
        if (binding.modifiers['delayed']) { //v-highlight:background.delayed -> delayed é o modifier
            delay = 3000;
        }
        setTimeout(() => {
            if (binding.arg == 'background') {  //v-highlight:background -> background é o arg do binding
                el.style.backgroundColor = binding.value; // v-highlight:background="'red'" -> red é o value do binding
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
