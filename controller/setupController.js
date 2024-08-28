var ToDo = require('../models/todoModel');

module.exports = function(app) {
    
    app.get('/api/setupTodo', function(req, resp) {
        //Seed DB
        var starterTodo = [
            {
                username: "Shubhangi",
                toDo: "buy watermelon",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Emily",
                toDo: "buy heels",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Blair",
                toDo: "buy bows",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Serena",
                toDo: "feed dog",
                isDone: false,
                hasAttachment: false
            },
        ]
        ToDo.create(starterTodo).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    });
}