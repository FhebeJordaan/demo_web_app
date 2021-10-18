var application = require('../helpers/application');
var Product = require('../models/product');
var sequelize = require('../helpers/database');

/* GET ProductsDetails page */
exports.loadProductsPage = function (req, res) {
    Product.findAll().then(products => {
        if (products.length > 0) {
            var productsresponds = [];
            for (var i = 0; i < products.length; i++) {
                var productJson = {
                    idProduct: products[i].idProduct,
                    barcode: products[i].Barcode,
                    description: products[i].Description,
                    schedule: products[i].Schedule,
                    height: products[i].Height,
                    length: products[i].Length,
                    width: products[i].Width,
                    pack: products[i].Pack,
                    weight: products[i].Weight,
                    units: products[i].Units,
                    type: products[i].Type,
                    ingredients: products[i].Ingredients,
                    manufacturer: products[i].Manufacturer,
                    directions: products[i].Directions
                }
                productsresponds.push(productJson);
            }
            
        }

        var content = application.loadPage('views.html', { products: productsresponds });
        res.send(content);
    })
}

/* GET ProductsDetails page */
exports.addProduct = function (req, res) {

    var content = application.loadPage('productDetails.html');
    res.send(content);
}

exports.deleteProduct = function (req, res) {
    var pageProduct = req.body.product;
    
    if (pageProduct != undefined) {
        Product.findOne({where: {idProduct: pageProduct}}).then(product => {
            if (product != undefined) {
                product.destroy();
                res.send('ok');
            } else {
                res.status(400).send("Product not found");
            }
        });
    } else {
        res.status(400).send("Product not found");
    }
}

exports.editProduct = function (req, res) {
    var pageProduct = req.body.product;

    Product.findOne({where: {idProduct: pageProduct}}).then(product => {
        if (product != undefined) {
            var productJSON = {
                idProduct: product.idProduct,
                barcode: product.Barcode,
                description: product.Description,
                schedule: product.Schedule,
                height: product.Height,
                length: product.Length,
                width: product.Width,
                pack: product.Pack,
                weight: product.Weight,
                units: product.Units,
                type: product.Type,
                ingredients: product.Ingredients,
                manufacturer: product.Manufacturer,
                directions: product.Directions
            };
            
            var content = application.loadPage('productDetails.html', {product: productJSON});
            res.send(content);
        } else {
            res.status(400).send("Product not found");
        }
    });
}

/* POST ProductsDetails page */
exports.saveProduct = function (req, res) {

    var idProduct = req.body.idProduct;
    var barcode = req.body.barcode;
    var description = req.body.description;
    var schedule = req.body.schedule;
    var height = req.body.height;
    var length = req.body.length;
    var width = req.body.width;
    var pack = req.body.pack;
    var weight = req.body.weight;
    var units = req.body.units;
    var type = req.body.type;
    var ingredients = req.body.ingredients;
    var manufacturer = req.body.manufacturer;
    var directions = req.body.directions;

    Product.findOne({where: {idProduct: idProduct}}).then(product => {
        if (product != undefined) {
            product.Barcode = barcode;
            product.Description = description;
            product.Schedule = schedule;
            product.Height = height;
            product.Length = length;
            product.Width = width;
            product.Pack = pack;
            product.Weight = weight;
            product.Units = units;
            product.Type = type;
            product.Ingredients = ingredients;
            product.Manufacturer = manufacturer;
            product.Directions = directions;
            
            product.save().then(product => {
                res.redirect('/app/products');
            });
        } else {
            Product.create({
                Barcode: barcode,
                Description: description,
                Schedule: schedule,
                Height: height,
                Length: length,
                Width: width,
                Pack: pack,
                Weight: weight,
                Units: units,
                Type: type,
                Ingredients: ingredients,
                Manufacturer: manufacturer,
                Directions: directions
            }).then(product => {
                res.redirect('/app/products');
            });
        }
    });
}

    