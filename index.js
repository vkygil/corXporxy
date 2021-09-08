// Listen on a specific host via the HOST environment variable
var fs = require('fs');

var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 1337;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
	httpsOptions: {
        key: fs.readFileSync('C:/Users/vky/Documents/torents/ssl/privkey.pem'),
        cert: fs.readFileSync('C:/Users/vky/Documents/torents/ssl/fullchain.pem')
    },
    originWhitelist: [], // Allow all origins
    // requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
