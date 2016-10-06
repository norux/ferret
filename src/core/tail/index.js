var local = require('./local');
var sftp = require('./sftp');
var tabs = [];

module.exports.start = function(tabId) {
    console.log('tail');
};

module.exports.isTailing = function(tabId) {
    if(tabs.indexOf(tabId) === -1) {
        return false;
    } else {
        return true;
    }
};