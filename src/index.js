const path = require('path')
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(require('morgan')('dev'))
app.use(express.static(path.resolve(__dirname, '../public')))

app.use(async (req, res, next) => {
  const handler = routes.get(req.path)
  if (!handler) return next()
  try {
    res.send(await handler())
  } catch (e) {
    next(e)
  }
})

module.exports = app
