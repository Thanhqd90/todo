// Dependencies
var db = require("../models");

// Routes
module.exports = function (app) {

    // GET
    app.get("/", function (req, res) {
        console.log(Object.keys(db));
        db.todo.findAll({}).then(function (dbTodo) {
            res.render("index", dbTodo)
        });
    });

    // POST 
    app.post("/api/todo", function (req, res) {

        db.Todo.create({
            todo: req.body.todo,
            accomplished: req.body.accomplished
        }).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    // DELETE 
    app.delete("/api/todo/:id", function (req, res) {
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTodo) {
            res.json(dbTodo);
        });

    });

    // PUT 
    app.put("/api/todo", function (req, res) {

        db.Todo.update({
            todo: req.body.todo,
            accomplished: req.body.accomplished
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    // GET PAGE 2
    app.get("/api/all", function (req, res) {
        db.Todo.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

};