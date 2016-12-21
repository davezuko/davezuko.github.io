require('fp-standard/installer')(global)
const r = require('./src/lib/react')
const path = require('path')
const HTML = require('./src/components/html')
const App = require('./src/components/app')
const { renderToString, renderToStaticMarkup } = require('react-dom/server')

module.exports = {
  // Project Structure
  // ----------------------------------
  src: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/main.js'),
  dest: path.resolve(__dirname, 'dist'),

  // Rendering
  // ----------------------------------
  render: (req, res) => {
    const styles = map(href => ({ href }), req.compiler.assets.css)
    const scripts = map(src => ({ src }), req.compiler.assets.js)
    const app = renderToString(r(App))
    const html = '<!doctype html>' +
      renderToStaticMarkup(r(HTML, { styles, scripts }, app))

    res(null, html)
  },
}
