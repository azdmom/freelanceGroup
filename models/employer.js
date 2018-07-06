module.exports = function (sequelize, DataTypes) {
    var employer = sequelize.define("employer", {
        EmployerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Industry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ContactName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ContactPhone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ContactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,       // checks for email format (foo@bar.com)
            }
        },
        Fields: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezefreelancer: true // Model tableName will be the same as the model name instead of being pluralized
    });

    return employer;
}