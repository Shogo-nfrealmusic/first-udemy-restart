const todos = [
    {
        id: 1,
        title: 'Go to College',
        completed: true
    },
    {
        id: 2,
        title: 'Go to the Gym',
        completed: true
    },
    {
        id: 3,
        title: 'Learn about Crypto',
        completed: false
    }
]

for(let todo of todos) {
    if(todo.completed === true) {
        console.log(todo.title);
    }
    
}