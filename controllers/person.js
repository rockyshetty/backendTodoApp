const db = require("../model");
const Persons = db.person;
const Todos = db.todos;

const errorMessage = "SOMETHING WENT WRONG PLEASE TRY AGAIN LATER";

exports.create = (req, res) => {
    try {
        let data = Persons.create(getTableInsertUpdateData(req.body))
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
        let data = Persons.update(getTableInsertUpdateData(req.body), { where: req.body.condition });
        res.send({
            message: data
                ? "PERSON updated successfully"
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
        let data = Persons.findAll({});
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
        let data = Persons.findAll({ where: req.body.condition });
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
        let data = Persons.destroy({}, { truncate: false });
        return res.send({ message: `${data} PERSON were deleted successfully!` });
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

exports.deleteByCondition = (req, res) => {
    try {
        let data = Persons.destroy({ where: req.body.condition });
        return res.send({ message: `${data} PERSON were deleted successfully!` });
    } catch (exception) {
        res.status(500).send({
            message:
                exception.message || errorMessage
        })
    }
}

const getTableInsertUpdateData = (data) => {
    let todo = {
        name: data.name,
    }

    if (data.id) { todo.id = data.id };

    return todo;
}
