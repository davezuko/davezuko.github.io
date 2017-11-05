#!/usr/bin/env node
const server = require('../src')

server.listen(3000, () => {
  console.log(`Server running on localhost:3000`)
})
