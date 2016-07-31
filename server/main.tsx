import * as path from 'path'
import * as express from 'express'
import * as webpack from 'webpack'
import webpackConfig from '../webpack.config.ts'
import render from './lib/render-app.tsx'

const app = express()

app.get('*', (req, res, next) => {
  req['originalPath'] = req.path
  next()
})

app.use(require('connect-history-api-fallback')())
app.get('/index.html', (req, res) => {
  res.send(render())
})

const compiler = webpack.call(null, webpackConfig)
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
, contentBase: path.resolve(process.cwd(), 'src')
, hot: true
, quiet: false
, noInfo: false
, lazy: false
// , stats: config.compiler_stats
}))
app.use(require('webpack-hot-middleware')(compiler))

export default app
