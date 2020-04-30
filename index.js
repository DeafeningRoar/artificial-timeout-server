require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.all('*', (req, res) => {
  console.log(
    `Received ${req.method.toUpperCase()} request ${JSON.stringify({headers: req.headers, body: req.body}, null, 2)}`
  )
})

const PORT = process.env.PORT || 3030
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

server.setTimeout(2000) // 2 seconds
