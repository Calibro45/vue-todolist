
const app = new Vue ({
    el: '#app',

    data: {
        todoList: [
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Rifare la stanza',
                done: true,
            },
            {
                text: 'Giocare alla play',
                done: false,
            },
            {
                text: 'Suonare la chitarra',
                done: false,
            },
            {
                text: 'Studiare',
                done: true,
            },{
                text: 'Rilassarsi sul divano',
                done: false,
            },
        ],
        newTask: '',
  
    },
    methods: {
        taskComplete: function(i) {
            this.todoList.splice(i, 1);
        },
        taskGenerate: function() {
            const text = this.newTask;
            return {
                text: text,
                done: false,
            }
        },
        taskPush: function() {
            this.todoList.push(this.taskGenerate());
            this.newTask = '';
        }
    },

})
console.log(app);