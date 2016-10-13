var window = require('../window');
var logger = require('../logger');

module.exports.tailLog = function(tabId, logs) {
    if(window.getWindow()) {
        window.WebContents.send('tail-log', {
            tabId: tabId,
            data: logs
        });
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