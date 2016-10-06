var fs = require('fs');
var winston = require('winston');

var makeOptions = function(name, filename) {
    return {
        timestamp: function() {
            var getLocaleISOString = function(d) {
                var pad = function(n) {
                    return n < 10 ? '0' + n : n;
                };
                return d.getFullYear() +
                        '-' + pad(d.getMonth() + 1) +
                        '-' + pad(d.getDate()) +
                        'T' + pad(d.getHours()) +
                        ':' + pad(d.getMinutes()) +
                        ':' + pad(d.getSeconds()) +
                        '.' + (d.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                        'Z';
            };
            return '[' + getLocaleISOString(new Date()) + ']';
        },
        formatter: function(options) {
            return options.timestamp() + '[' + options.level.toUpperCase() + '] ' + options.message;
        },
        json: false,
        name: name,
        filename: filename,
        handleExceptions: true,
        humanReadableUnhandledException: true
    };
};

module.exports = {
    core: new (winston.Logger)({
        transports: [
            // new (winston.transports.File)(makeOptions('debug', './logs/debug_ferret_core.log'))
            new (winston.transports.Console)(makeOptions('debug', '/logs/debug_ferret_core.log'))
        ],
        exitOnError: true,
    }),
    viewer: new (winston.Logger)({
        transports: [
            // new (winston.transports.File)(makeOptions('debug', './logs/debug_ferret_viewer.log'))
            new (winston.transports.Console)(makeOptions('debug', '/logs/debug_ferret_viewer.log'))
        ],
        exitOnError: true
    })
};