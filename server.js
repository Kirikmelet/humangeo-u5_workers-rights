const express = require('express')
const path = require('path')
const app = express()

app.on('/', (res, _req) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(express.static(path.join(__dirname)))

app.listen(5438, () => {})
