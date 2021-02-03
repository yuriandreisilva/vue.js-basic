var app = new Vue({ 
  el: '#app-1',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

app.todos.push({ text: 'New item' })

var app = new Vue({
  el: '#app-2',
  data: {
    message: 'Hello Vue.js!'
  }, 
  methods: { 
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app = new Vue({
  el: '#app-3',
  data:{
    message: 'Hello Vue! #model'
  }
})


Vue.component('todo-item',{
  template: '<li>This is a todo</li>'
})
var app = new Vue ({
  el: '#app-4'
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app-5',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})