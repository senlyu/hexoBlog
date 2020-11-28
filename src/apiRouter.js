var express = require('express')
var router = express.Router()

router.use('*', (req, res, next)=>{
  console.log(`Got a request: ${req.method} ${req.url}`)
  next()
})

// define the about route
router.get('/test', function (req, res) {
  res.sendStatus(200)
})



module.exports = router