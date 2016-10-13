var ipcMain = require('electron').ipcMain;
var logger = require('../logger');
var tabs = require('../tabs');
var local = require('../protocol/local');

ipcMain.on('load-log', function(event, tab) {
    logger.core.info('ipcMain.on.load-log : ====load log ======');
    logger.core.info('ipcMain.on.load-log : ' + JSON.stringify(tab));

    if(tabs.get(tab.tabId)) {
        var errormsg = 'tab is already exists';
        event.returnValue = errormsg;
        return logger.core.info(errormsg);
    }

    if(tab.protocol === 'local') {
        // TODO load
        local.load(tab);

        local.tail(tab, function success(newTab) {
            logger.core.info('ipcMain.on.load-log : ' + JSON.stringify(newTab));
            tabs.add(newTab);

            event.returnValue = ['success', 'ssss'];
        });
    } else if(tab.protocol === 'sftp') {
        // TODO load

        require('../protocol/sftp').watcher();
    } else {
        logger.core.error('ipcMain.on.load-log : Invalid protocol' + tab.protocol);
    }
});

ipcMain.on('close-tab', function(event, tabId) {
    var tab = tabs.get(tabId);

    if(tab.protocol === 'local') {
        local.untail(tab, function success(t) {
            logger.core.info('ipcMain.on.close-tab : ' + JSON.stringify(t));
            tabs.remove(tab.tabId);

            event.returnValue = 'success';
        });
    } else if(tab.protocol === 'sftp') {
        // TODO load

        require('../protocol/sftp').close();
    } else {
        logger.core.error('ipcMain.on.close-tab : Invalid protocol' + tab.protocol);
    }
});