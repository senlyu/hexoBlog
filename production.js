
const http = require('http');
const https = require('https');
const app = require('./app')

const httpServer = http.createServer(app);
const httpPort = +process.env.HTTP_PORT || 80
httpServer.listen(httpPort, () => {
	console.log('HTTP Server running on port ' + httpPort);
});

if (process.env.NODE_ENV==='production') {
  const credentials = require('./httpsCred')
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });
}