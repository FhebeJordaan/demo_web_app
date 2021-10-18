var SystemUser  = require('../models/systemuser');

/* GET dashboard page */
exports.loadDashboard = function(req, res){
    res.render('dashboard', {FullName: req.user.FullName});
}