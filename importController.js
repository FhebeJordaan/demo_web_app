var filesystem = require('../helpers/filesystem');
var path = require('path');
var Product = require('../models/product');

/* POST import products */
exports.importProducts = function(req, res){
	var importdir = path.join(__dirname, '../../import');
    filesystem.readDir(importdir, function(err, data) {
        if (data != undefined) {
            for (var f = 0; f < data.length; f++) {
                var fileContent = filesystem.readFile(importdir + "\\" + data[f]);
                var fileLines;

                if (fileContent != undefined) {
                    fileLines = fileContent.split('\r\n');
                } else {
                    filesystem.deleteFile(importdir + "\\" + data[f]);
                    continue;
                }

                if (fileLines == undefined || fileLines.length < 1) {
                    filesystem.deleteFile(importdir + "\\" + data[f]);
                    continue;
                }

                var newProduct = new Product();
                for (var l = 0; l < fileLines.length; l++) {
                    if (fileLines[l].indexOf(":") == -1) {
                        continue;
                    }
                    var label = fileLines[l].substr(0, fileLines[l].indexOf(":"));
                    var value = fileLines[l].substr(fileLines[l].indexOf(":") + 1, fileLines[l].length);

                    switch(label) {
                        case "Barcode" : {
                            newProduct.Barcode = value;
                            break;
                        }
                        case "Description" : {
                            newProduct.Description = value;
                            break;
                        }
                        case "Schedule" : {
                            newProduct.Schedule = value;
                            break;
                        }
                        case "Height" : {
                            newProduct.Height = value;
                            break;
                        }
                        case "Length" : {
                            newProduct.Length = value;
                            break;
                        }
                        case "Width" : {
                            newProduct.Width = value;
                            break;
                        }
                        case "Pack Size" : {
                            newProduct.Pack = value;
                            break;
                        }
                        case "Weight" : {
                            newProduct.Weight = value;
                            break;
                        }
                        case "Units" : {
                            newProduct.Units = value;
                            break;
                        }
                        case "Type" : {
                            newProduct.Type = value;
                            break;
                        }
                        case "Ingredients" : {
                            newProduct.Ingredients = value;
                            break;
                        }
                        case "Manufacturer" : {
                            newProduct.Manufacturer = value;
                            break;
                        }
                        case "Directions" : {
                            newProduct.Directions = value;
                            break;
                        }
                    }
                } 

                //console.log(newProduct);

                if (newProduct.Barcode != undefined && newProduct.Description != undefined) {
                    newProduct.save().then(() => {
                    
                    });
                    console.log(data[f] + " processed successfully.");
                }

                filesystem.deleteFile(importdir + "\\" + data[f]);
                
            }
            res.send('ok');
        } else {
            res.send('ok');
        }
    });
};