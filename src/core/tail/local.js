var chokidar = require('chokidar');
var fs = require('fs');
var path = require('path');

module.exports.watcher = function(filePath, cb) {
    if(!fs.statSync(filePath).isFile()) {
        return cb(new Error('Not file'));
    }

    chokidar.watch(filePath)
        .on('add', function(file) {
            //TODO
            console.log('add: ' + path.resolve(file));
        })
        .on('change', function(file) {
            //TODO
            console.log('change: ' + path.resolve(file));
        })
        .on('unlink', function(file) {
            //TODO
            console.log('unlink: ' + path.resolve(file));
        });
};