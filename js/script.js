
const app = new Vue ({
    el: '#app',

    data: {
        todoList: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Rifare la stanza',
                done: false,
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
                done: false,
            },{
                text: 'Rilassarsi sul divano',
                done: false,
            },
        ]
    },

})
console.log(app);