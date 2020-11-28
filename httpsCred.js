const fs = require('fs')
// Certificate
const privateKeyPath = process.env.PRIVATE_KEY_PATH
const certPath = process.env.CERT_PATH
const caPath = process.env.CA_PATH
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certPath, 'utf8');
const ca = fs.readFileSync(caPath, 'utf8');

module.exports = {
  key: privateKey,
  cert: certificate,
  ca: ca
};