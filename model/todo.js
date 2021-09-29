module.exports = (sequelize, Sequelize) => {
    const Todos = sequelize.define(
        "todo",
        {
            title: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            person: {
                type: Sequelize.INT,
            },
            startDate: {
                type: Sequelize.STRING,
            },
            endDate: {
                type: Sequelize.STRING,
            },
        }
    );

    return Todos;
}