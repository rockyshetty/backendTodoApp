const db = require("../model");
const Todos = db.todos

const errorMessage = "SOMETHING WENT WRONG PLEASE TRY AGAIN LATER";

exports.create = (req, res) => {
    try {
        let data = Todos.create(getTableInsertUpdateData(req.body))
        return res.send(data);
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

exports.update = (req, res) => {
    try {
        let data = Todos.update(getTableInsertUpdateData(req.body), { where: req.body.condition });
        res.send({
            message: data
                ? "TODO updated successfully"
                : "May be data is not present"
        })
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

exports.findAll = (req, res) => {
    try {
        let data = Todos.findAll({});
        return res.send(data);
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

exports.findByCondition = (req, res) => {
    try {
        let data = Todos.findAll({ where: req.body.condition });
        return res.send(data);
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

exports.deleteAll = (req, res) => {
    try {
        let data = Todos.destroy({}, { truncate: false });
        return res.send({ message: `${data} TODOS were deleted successfully!` });
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

exports.deleteByCondition = (req, res) => {
    try {
        let data = Todos.destroy({ where: req.body.condition });
        return res.send({ message: `${data} TODOS were deleted successfully!` });
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

const getTableInsertUpdateData = (data) => {
    let todo = {
        title: data.title,
        description: data.description,
        person: data.person,
        startDate: data.startDate,
        endDate: data.endDate,
    }

    if (data.id) { todo.id = data.id };

    return todo;
}
