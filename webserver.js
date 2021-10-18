var webserver = function () {
    var path = require('path');
    var express = require('express');
    var swig = require('swig');
    var http = require('http');
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser');
    var passport = require('passport');
    var Strategy = require('passport-local').Strategy;
    var session = require('express-session');
    var security = require('connect-ensure-login');
    var flash = require('connect-flash');
    //var bcrypt = require('bcrypt');
    var sequelize = require('./database');
    var SystemUser = require('../models/systemuser');
    var MemoryStore = session.MemoryStore;

    passport.use(new Strategy(
        function (username, password, callback) {
            SystemUser.findOne({ where: { Username: username } }).then(user => {
                if (user != null && user != undefined) {
                    if (user.Password == password) {
                        return callback(null, user);
                    } else {
                        return callback(null, false, { message: 'Invalid Credentials' });
                    }
                } else {
                    return callback(null, false, { message: 'Invalid Credentials' });
                }
            });
        }
    ));
    passport.serializeUser(function (user, callback) {
        callback(null, user.idSystemUser);
    });
    passport.deserializeUser(function (id, callback) {
        SystemUser.findOne({ where: { idSystemUser: id } }).then(user => {
            if (user != null && user != undefined) {
                callback(null, user);
            } else {
                callback(null, false, { message: 'User Not Found' })
            }
        });
    });

    var expressServer = express();
    expressServer.engine('html', swig.renderFile);
    expressServer.set('view engine', 'html');
    expressServer.set('views', __dirname + '/../views');
    expressServer.use(bodyParser.urlencoded({
        extended: true
    }));
    expressServer.use(bodyParser.json());
    expressServer.use(cookieParser());
    expressServer.use(session({ secret: 'very hard secret', resave: false, saveUninitialized: false, store: new MemoryStore({ reapinterval: 1000 * 60 * 30 }) }));
    expressServer.use(flash());
    expressServer.use(passport.initialize());
    expressServer.use(passport.session());

    var httpServer = http.Server(expressServer);

    var httpListen = function (port) {
        httpServer.listen(port);
        console.log("Web Server listening on port " + port);

        // routing
        var landingController = require('../controllers/landingController');
        var loginController = require('../controllers/loginController');
        var dashboardController = require('../controllers/dashboardController');
        var productController = require('../controllers/productController');
        var importController = require('../controllers/importController');

        //GET REQUESTS
        expressServer.get('/', landingController.redirectLanding);
        expressServer.get('/app/', landingController.loadLanding);
        expressServer.get('/app/login', loginController.loadLogin);
        expressServer.get('/app/admin', security.ensureLoggedIn('/app/login'), dashboardController.loadDashboard);
        expressServer.get('/app/products', security.ensureLoggedIn('/app/login'), productController.loadProductsPage);

        expressServer.get('/app/product/addproduct', security.ensureLoggedIn('/app/login'), productController.addProduct);

        //POST REQUESTS
        expressServer.post('/app/product/save', security.ensureLoggedIn('/app/login'), productController.saveProduct);
        expressServer.post('/app/product/delete', security.ensureLoggedIn('/app/login'), productController.deleteProduct);
        expressServer.post('/app/product/edit', security.ensureLoggedIn('/app/login'), productController.editProduct);

        expressServer.post('/app/product/import', security.ensureLoggedIn('/app/login'), importController.importProducts);

        //Login and Logout is handled separately
        expressServer.post('/app/login', passport.authenticate('local', { successRedirect: '/app/admin', failureRedirect: '/app/login', failureFlash: true }));
        expressServer.get('/app/logout', security.ensureLoggedIn('/app/login'), function (req, res) {
            req.logout();
            req.session.destroy();
            res.redirect('/app/login');
        });

        //ASSETS
        expressServer.use('/app/assets/', express.static(path.join(__dirname, '../../public')));

        //Handle 404 Not Found Requests
        expressServer.use(function (req, res, next) {
            res.status(404);
            res.render('error404');
        });
    };

    return {
        httpListen: httpListen
    };

}();
module.exports = webserver;