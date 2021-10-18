var path = require('path');

var fs = require('fs');
var util = require('util');


/* *************************************************************************************** */
/* APP STARTS HERE */
/* *************************************************************************************** */

var port = 8000;

var webServer = require('./source/helpers/webserver');

var initData = require('./source/helpers/initdata');

initData.initDBData();

//Start the web server
webServer.httpListen(port);

/* *************************************************************************************** */
/* *************************************************************************************** */