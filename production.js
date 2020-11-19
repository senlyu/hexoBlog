const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.static(process.env.STATIC_FOLDER))

app.use('*', (req, res, next)=>{
  console.log(`Got a request: ${req.method} ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})