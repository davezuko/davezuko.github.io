const fs = require('fs-extra')
const path = require('path')
const pug = require('pug')
const marked = require('marked')
const fm = require('front-matter')

// Utilities
// ------------------------------------
/** Returns absolute paths of all files in a directory */
function getFiles(dir) {
  return fs.readdirSync(dir).map(file => path.resolve(dir, file))
}

/** Emits a file to the build output folder */
function outputFile(file, content) {
  return fs.outputFileSync(path.resolve('dist', file), content, 'utf8')
}

// Build Steps
// ------------------------------------
function makeViews() {
  getFiles('views').forEach(file => {
    const outFile = path.basename(file).replace('.pug', '.html')
    outputFile(outFile, pug.renderFile(file))
  })
}

function makeBlog() {
  const render = pug.compileFile('layouts/blog-post.pug')

  getFiles('data/blog').map(file => {
    const filename = path.basename(file)
    const { attributes, body } = fm(fs.readFileSync(file, 'utf8'))
    const content = marked(body)
    const outFile = path.join('blog', filename.replace('.md', '.html'))

    outputFile(outFile, render(Object.assign({}, attributes, { content })))
  })
}

// Build Pipeline
// ------------------------------------
fs.emptyDirSync('dist')
fs.copySync('public', 'dist')
makeViews()
makeBlog()
