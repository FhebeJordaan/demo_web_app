var Sequelize = require('sequelize');

var sequelize = new Sequelize("fhebe_db", "root", "s1c2s3d4e5v6!", {
    host: "192.168.245.156",
    port: "3306",
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName : true,
        timestamps: false,
    },
    logging: false
});

module.exports = sequelize;