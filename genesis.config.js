const path = require('path')
const local = fpath => path.resolve(__dirname, fpath)

module.exports = {
  env: process.env.NODE_ENV,
  main: [
    local('src/main.preload.js'),
    local('src/main.js'),
  ],
  verbose: true,
  app_template: local('src/index.html'),
}
