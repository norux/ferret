var chokidar = require('chokidar');
var fs = require('fs');
var path = require('path');
var logger = require('../logger');

module.exports.load = function(path) {

};

module.exports.tail = function(tab, successCallback) {
    fs.stat(tab.path, function(err, stat) {
        if(err) return logger.core.error('local.watcher : ' + JSON.stringify(err));
        if(!stat.isFile()) return logger.core.error('local.watcher : not readable file: ' + tab.path);

        tab.watcher = chokidar.watch(tab.path)
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

        if(typeof successCallback === 'function') successCallback(tab);
    });
};

module.exports.untail = function(tab, successCallback) {
    tab.watcher.close();
    tab.watcher = null;

    if(typeof successCallback === 'function') successCallback(tab);
};