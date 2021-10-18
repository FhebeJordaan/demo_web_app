var Sequelize = require('sequelize');

class SystemUser extends Sequelize.Model { }

var sequelize = require('../helpers/database');

SystemUser.init({
    idSystemUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    Username: Sequelize.STRING,
    Password: Sequelize.STRING,
    FullName: Sequelize.STRING
}, {
    sequelize,
    modelName: 'SystemUser'
});

module.exports = SystemUser;