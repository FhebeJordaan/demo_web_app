/* GET login page */
exports.loadLogin = function(req, res){
	if (req.user) {
		res.redirect('/app/admin');
	} else {
		var errorMessages = req.flash('error');
		var loginMessage = null;
		if (errorMessages.length > 0) {
			loginMessage = errorMessages[0];
		}
		res.render('login', { message: loginMessage });
	}
};