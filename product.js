var Sequelize = require('sequelize');

class Product extends Sequelize.Model { }

var sequelize = require('../helpers/database');

Product.init({
    idProduct: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    Barcode: Sequelize.STRING,
    Description: Sequelize.STRING,
    Schedule: Sequelize.STRING,
    Height: Sequelize.STRING,
    Length: Sequelize.STRING,
    Width: Sequelize.STRING,
    Pack: Sequelize.STRING,
    Weight: Sequelize.STRING,
    Units: Sequelize.STRING,
    Type: Sequelize.STRING,
    Ingredients: Sequelize.STRING,
    Manufacturer: Sequelize.STRING,
    Directions: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'Product'
});

module.exports = Product;