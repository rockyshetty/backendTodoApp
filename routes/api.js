module.exports = app => {
    
    let routes = app.Router();
    let Todo = require('../controllers/todo');
    let Person = require('../controllers/person');

    routes.post("todo", Todo.create);
    routes.put("todo/:id", Todo.update);
    routes.get("todo", Todo.findAll);
    routes.get("todo/:id", Todo.findById);
    routes.delete("todo", Todo.deleteAll);
    routes.delete("todo/:id", Todo.deleteById);

    routes.post("person", Person.create);
    routes.put("person/:id", Person.update);
    routes.get("person", Person.findAll);
    routes.get("person/:id", Person.findById);
    routes.delete("person", Person.deleteAll);
    routes.delete("person/:id", Person.deleteById);

    app.use("backend/", routes);

}