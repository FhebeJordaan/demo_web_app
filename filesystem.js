var filesystem = function() {
	var fs = require("fs");

	var readFile = function(filename) {
		return fs.readFileSync(filename, "utf8");
	};

	var readDir = function(filename, callback) {
		fs.readdir(filename, callback);
	};

	var existsSync = function(filename) {
		return fs.existsSync(filename);
	};

	var deleteFile = function(filename) {
		return fs.unlinkSync(filename);
	};

	return {
		readFile: readFile,
		readDir: readDir,
		existsSync: existsSync,
		deleteFile: deleteFile
	};

}();
module.exports = filesystem;