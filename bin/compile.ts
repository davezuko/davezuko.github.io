import * as fs from 'fs'
import * as path from 'path'
import * as webpack from 'webpack'
import render from '../server/lib/render-app.tsx'
import webpackConfig from '../webpack.config.ts'

const compiler = webpack.call(null, webpackConfig)

compiler.run((err, stats) => {
  console.log('done.')
  const rendered = render()
  fs.writeFileSync(path.resolve(process.cwd(), 'dist/index.html'), rendered, 'utf-8')
  process.exit(0)
})
