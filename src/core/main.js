var electron = require('electron');
var app = electron.app;
var window = require('./window');
var logger = require('./logger');

logger.core.info('aaaaaa');
logger.core.warn('aaaaaa');
logger.core.error('aaaaaa');

// var local = require('./tail/local');
//
// local.watcher('/Users/norux/test/plain', function(err) {
//     if(err) console.log(err);
// });

app.on('ready', window.create);
app.on('window-all-closed', function () {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function(event, hasVisibleWindows) {
    if(hasVisibleWindows === false) {
        window.create();
    }
});
