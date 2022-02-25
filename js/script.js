
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
        ]
    },

})
console.log(app);