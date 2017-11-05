const { createFileRenderer } = require('../lib/utils')

module.exports = new Map([
  ['/', createFileRenderer('home/index')],
])
