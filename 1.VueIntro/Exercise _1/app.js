// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#exercise',
	data: {
    title: 'Hello World!',
    name: 'Diana',
    age: 26,
    imageLink: 'https://www.mundoboaforma.com.br/wp-content/uploads/2016/01/beneficios-da-melancia.jpg'
  },
  methods: {
    multipliedAge: function(){
      return this.age * 3;
    },
    randomFloat: function(){
      return Math.random();
    }
  }
})