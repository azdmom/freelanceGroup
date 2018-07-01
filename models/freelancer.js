module.exports = function (sequelize, DataTypes) {
    var freelancer = sequelize.define("freelancer", {
        FName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Fields: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezefreelancer: true // Model tableName will be the same as the model name instead of being pluralized
    });

    return freelancer;
};