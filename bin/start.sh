#!/usr/bin/env node
const server = require('../src')

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})
