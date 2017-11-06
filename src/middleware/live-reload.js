const path = require('path')
const tinylr = require('tiny-lr')
const gaze = require('gaze')

module.exports = ({ port = 4001 }) => {
  tinylr().listen(port)
  gaze([
    path.resolve(__dirname, '../**/*'),
  ], function () {
    this.on('changed', (f) => {
      for (key in require.cache) delete require.cache[key]
      tinylr.changed(f)
    })
  })
  return require('connect-livereload')({ port })
}
