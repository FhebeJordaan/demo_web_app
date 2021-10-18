/* GET redirect to landing page */
exports.redirectLanding = function(req, res){
	res.redirect('/app/');
};

/* GET landing page */
exports.loadLanding = function(req, res){
	res.render('landing');
};