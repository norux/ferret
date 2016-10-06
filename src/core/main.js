var electron = require('electron');
var app = electron.app;
var window = require('./window');
var logger = require('../common/logger');

require('./ipc/listener');

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
