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

const createFileRenderer = (filepath) => async () => {
  const HTML = require('../components/HTML')
  const View = require(path.resolve(__dirname, '../routes', filepath))
  const styles = [
    { href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
    { body: await compileSass(path.resolve(__dirname, '../styles/main.sass')) },
  ]

  const view =  ReactServer.renderToStaticMarkup(r(View))
  const html = ReactServer.renderToStaticMarkup(r(HTML, { styles }, view))
  return `<!doctype html>${html}`
}

exports.createFileRenderer = createFileRenderer
