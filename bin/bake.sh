#!/usr/bin/env node
const { init, last } = require('redash')
const fs = require('fs')
const util = require('util')
const path = require('path')
const routes = require('../src/routes')
const writeFile = util.promisify(fs.writeFile)

const inDist = (fpath = '') => path.resolve(__dirname, '../dist', fpath)

if (!fs.existsSync(inDist())) {
  fs.mkdirSync(inDist())
  fs.mkdirSync(inDist('blog'))
}

const bakeRoute = async ([uri, handler]) => {
  const segments = uri.replace(/^\//, '').split('/')
  const dest = uri === '/' ? 'index.html'
    : segments.length === 1 ? segments[0] + '.html'
    : [...init(segments), last(segments) + '.html'].join('/')

  writeFile(inDist(dest), await handler())
}

;(async () => {
  try {
    await Promise.all([...routes.entries()].map(bakeRoute))
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
