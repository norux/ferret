var ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('load-log-finish', function(event, data) {
    console.log('====load-log-finish=====');
    console.log(data);
});

ipcRenderer.on('tail-log', function(event, data) {
    console.log('====tail-log=====');
    console.log(data);
});