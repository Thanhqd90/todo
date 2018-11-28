// Dependencies
var db = require("../models");

// Routes
module.exports = function (app) {

    // GET
    app.get("/api/todos", function (req, res) {
        db.Todo.findAll({}).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    // POST 
    app.post("/api/todos", function (req, res) {

        db.Todo.create({
            todo: req.body.todo,
            accomplished: req.body.accomplished
        }).then(function (dbTodo) {
            res.json(dbTodo);
        });
    });

    // DELETE 
    app.delete("/api/todos/:id", function (req, res) {
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTodo) {
            res.json(dbTodo);
        });

    });

    // PUT 
    app.put("/api/todos", function (req, res) {

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