const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

const index = require('./routes/index')

app.use(cookieParser());
app.use(index)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
