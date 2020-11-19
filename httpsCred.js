// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/senlyu.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/senlyu.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/senlyu.com/chain.pem', 'utf8');

module.exports = {
  key: privateKey,
  cert: certificate,
  ca: ca
};