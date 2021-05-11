const express = require('express')
const path = require('path')
const app = express()

app.on('/', (res, _req) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(express.static(path.join(__dirname)))

app.listen(5438, () => {
  console.warn('Server port: 5438\nLink: http://127.0.0.1:5438')
  console.warn('Please lookup your private IP for LAN')
  console.warn('There is no SSL either (no https)')
})
