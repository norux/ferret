var ipcMain = require('electron').ipcMain;
var logger = require('../../common/logger');

ipcMain.on('load-log', function(event, data) {
    logger.core.info('ipcMain.on : ====async request log ======');
    logger.core.info('ipcMain.on : ' + JSON.stringify(data));


    // TODO load


    // TODO tailing
    if(data.protocol === 'local') {

    } else if(data.protocol === 'sftp') {

    } else {
        logger.core.error('ipcMain.on : Invalid protocol' + data.protocol);
    }

    event.sender.send('load-log-finish', ['log', 'log2']);
});

