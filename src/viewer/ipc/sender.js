
var logger = require('../logger');

/**
 * @function loadLog
 * request log to core process
 *
 * @param tab (object)
 *  {
 *      tabId: String(),
 *      path: String(),
 *      protocol: String(), (local, sftp)
 *      ip: String(),       (when protocol is sftp)
 *      plugin: String(),   (decrypt plugin)
 *      reload: Bool()
 *  }
 */
module.exports.loadLog = function(tab) {
    var ret = ipcRenderer.sendSync('load-log', tab);

    if(Array.isArray(ret)) {
        console.log(ret);
    } else if(typeof ret === 'string') {
        return logger.viewer.error('loadLog : ' + ret);
    } else {
        return logger.viewer.error('loadLog : unknown error');
    }
};

module.exports.closeTab = function(tabId) {
    ipcRenderer.sendSync('close-tab', tabId);
};

