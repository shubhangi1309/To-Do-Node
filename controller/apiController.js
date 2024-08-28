var ToDo = require("../models/todoModel");

var bodyParser = require("body-parser"); // MIDDLEWARE

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extened: true,
    })
  );

  app.get("/api/todos/:uname", function (req, res) {
    ToDo.find({ username: req.params.uname }, function (err, todos) {
      if (err) throw err;

      res.send(todos);
    });
  });

  app.get("/api/todos/:id", function (req, res) {
    ToDo.find({ username: req.params.id }, function (err, todos) {
      if (err) throw err;

      res.send(todos);
    });
  });

  app.post("/api/todos", function (req, res) {
    if (req.body.id) {
      ToDo.findByIdAndUpdate(
        req.body.id,
        {
          toDo: req.body.toDo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        function (err, todo) {
          if (err) throw err;
          res.send("Success");
        }
      );
    }
    else {
        var newTodo = ToDo({
            username: "Shubhangi",
            toDo: req.body.toDo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        });

        newTodo.save(function(err) {
            res.send("Success");
        });
    }
  });
};
