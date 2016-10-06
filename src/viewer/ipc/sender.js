
/**
 * @function requestLog
 * request log to core process
 *
 * @param opt (object)
 *  {
 *      tabId: String(),
 *      path: String(),
 *      protocol: String(), (local, sftp)
 *      ip: String(),       (when protocol is sftp)
 *      plugin: String(),   (decrypt plugin)
 *      reload: Bool()
 *  }
 */
module.exports.requestLog = function(opt) {
    ipcRenderer.send('load-log', opt);
};

