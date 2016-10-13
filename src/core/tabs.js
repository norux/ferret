var tabs = [];

module.exports.getIndex = function(tabId) {
    for(var i = 0; i < tabs.length; i++) {
        if(tabs[i].tabId === tabId) return i;
    }
    return -1;
};

module.exports.get = function(tabId) {
    for(var i = 0; i < tabs.length; i++) {
        if(tabs[i].tabId === tabId) return tabs[i];
    }
    return null;
};

module.exports.add = function(tab) {
  tabs.push(tab);
};

module.exports.remove = function(tabId) {
    var idx = this.getIndex(tabId);
    if(idx !== -1) tabs.splice(idx, 1);
};

