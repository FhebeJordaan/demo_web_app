var application = function() {
	var swig  = require('swig');

	var navigate = function(req, res, content) {
		var navigate = req.params.navigate;
		if (navigate == 'menu') {
			res.send(content);
		} else {
			if(req.user != undefined) {
				res.render('main',{ pageContent: content, name: req.user.FullName, role: req.user.UserRole });
			} else {
				res.render('main',{ pageContent: content });
			}
		}
	};

	var loadPage = function(pageName, params) {
		return swig.renderFile(__dirname + '/../views/' + pageName, params);
	};

	var handleError = function(error) {
		console.log(error);
	};

	return {
		navigate: navigate,
		loadPage: loadPage,
		handleError: handleError
	};
}();
module.exports = application;