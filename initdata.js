var Product = require('../models/product');
var SystemUser = require('../models/systemuser');

var sequelize = require('../helpers/database');

var initData=function(){

    var initDBData = function(){
        (async () => {
            await sequelize.sync({alter:true});
        })();
      
    };
    return {
        initDBData : initDBData
    };

}();
module.exports = initData;