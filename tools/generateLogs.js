var fs = require('fs');

setInterval(function() {
    console.log('append file...');
    fs.appendFile('./test-logs.gen', new Date().toISOString() + '\n', function(err) {
        if(err) console.log(err);
    });
}, 1000);
