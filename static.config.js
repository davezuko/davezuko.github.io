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
    const styles = req.assets.css ? req.assets.css.map(href => ({ href })) : []
    const scripts = req.assets.js ? req.assets.js.map(src => ({ src })) : []
    const rendered = renderToString(r(App))
    const html = `<!doctype html>` + renderToStaticMarkup(
      r(HTML, { styles, scripts }, rendered))

    res(null, html)
  },
}
