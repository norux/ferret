var BrowserWindow = require('electron').BrowserWindow;
var menu = require('./menu');

var window;
module.exports.create = function() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
    });

    window.loadURL('file://' + __dirname + '/../viewer/index.html');

    if(process.argv[2] && process.argv[2].toString().toLowerCase().trim() == 'dev') {
        window.webContents.openDevTools();
    }

    window.on('closed', function () {
        window = null;
    });

    menu.create();
};

module.exports.getWindow = function() {
    return window;
};