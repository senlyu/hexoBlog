const express = require('express')
const app = express()

app.use(express.static(process.env.STATIC_FOLDER))

app.use('*', (req, res, next)=>{
  console.log(`Got a request: ${req.method} ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app