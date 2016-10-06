var window = require('../window');
var logger = require('../../common/logger');

module.exports.tailLog = function(data) {
    if(window.getWindow()) {
        window.WebContents.send('tail-log', data);
    } else {
        logger.core.warn('window is undefined');
    }
};

module.exports.fileRemoved = function(data) {
    if(window.getWindow()) {
        window.WebContents.send('file-removed', data);
    } else {
        logger.core.warn('window is undefined');
    }
};