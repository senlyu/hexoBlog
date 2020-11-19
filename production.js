
const http = require('http');
const https = require('https');
const app = require('./app')

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

if (process.env.NODE_ENV==='production') {
  const credentials = require('./httpsCred')
  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });
}