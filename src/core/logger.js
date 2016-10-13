var app = require('electron').app;
var fs = require('fs');
var winston = require('winston');
var mkdirp = require('mkdirp');

var makeOptions = function(name, level, filename) {
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
        level: level,
        handleExceptions: true,
        humanReadableUnhandledException: true
    };
};

var directory = (process.env.NODE_ENV === 'dev' ? process.cwd() : app.getPath('userData')) + '/logs/';
var filename = 'debug_ferret_core.log';

mkdirp(directory, function(err) {
   if(err) return console.error(err);
});

module.exports.core = new (winston.Logger)({
    transports: [
        new (winston.transports.File)(makeOptions('critical', 'warn', directory + filename)),
        new (winston.transports.Console)(makeOptions('all', 'silly'))
    ],
    exitOnError: true,
});