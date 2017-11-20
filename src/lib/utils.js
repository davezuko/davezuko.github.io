const path = require('path')
const sass = require('node-sass')
const ReactServer = require('react-dom/server')
const r = require('./react')

const compileSass = (file) => new Promise((resolve, reject) => {
  const opts = {
    file,
    outputStyle: 'compressed',
  }
  sass.render(opts, (err, res) => {
    if (err) return reject(err)
    resolve(res.css)
  })
})

const renderView = async (View) => {
  const HTML = require('../components/HTML')
  const styles = [
    { href: 'https://fonts.googleapis.com/css?family=Open+Sans|Merriweather:300,300italic' },
    { body: await compileSass(path.resolve(__dirname, '../styles/main.sass')) },
  ]

  const view =  ReactServer.renderToStaticMarkup(r(View))
  const html = ReactServer.renderToStaticMarkup(r(HTML, { styles }, view))
  return `<!doctype html>${html}`
}

const createFileRenderer = (filepath) => () => {
  return renderView(require(path.resolve(__dirname, '../routes', filepath)))
}

exports.renderView = renderView
exports.createFileRenderer = createFileRenderer
