var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('tail-log', function(event, data) {
    console.log('====protocol-log=====');
    console.log(data);
});