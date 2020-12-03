const express = require('express')
const app = express()

// static blog files
app.use('/blog', express.static(process.env.STATIC_FOLDER))
app.get('/download/:fileName', function(req, res){
  const file = `${__dirname}/downloads/${req.params.fileName}`;
  res.download(file); // Set disposition and send it.
});

// api router
const apiRouter = require('./src/apiRouter')
app.use('/api', apiRouter)

app.use('*', (req, res) => {
  // redirect / to /blog/home
  if (req.originalUrl==='/') {
    res.redirect('/blog/home')
  // redirect 404 to error, because /blog/404 page is exist, should handled in static page
  // if still here means the page is wrong
  } else if (req.originalUrl==='/blog/404') {
    res.redirect('/error')
  // use /error url to send 503
  } else if (req.originalUrl==='/error') {
    res.sendStatus(503)
  // if not found will go 404 page
  } else {
    console.log(req.originalUrl)
    res.redirect('/blog/404')
  }
})

module.exports = app