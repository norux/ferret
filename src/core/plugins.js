var glob = require('glob');
var path = require('path');

// require all javascript in tail
glob('./src/core/tail/*.js', function(err, files) {
    files.forEach(function(file) {
        require(path.resolve(file));
    });
});