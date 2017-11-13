const r = require('../lib/react')
const util = require('util')
const _ = require('redash')
const fs = require('fs')
const fm = require('front-matter')
const path = require('path')
const marked = require('marked')
const { renderView, createFileRenderer } = require('../lib/utils')

marked.setOptions({
  highlight: (code) => require('highlight.js').highlightAuto(code).value,
})

const readFile = util.promisify(fs.readFile)

const posts = fs.readdirSync(path.resolve(__dirname, 'blog'))

const renderBlogPost = async (filepath) => {
  const { attributes, body } = fm(await readFile(filepath, 'utf8'))
  const content = marked(body)

  const BlogPost = require('../components/BlogPost')
  const View = () => r(BlogPost, {
    title: attributes.title,
    children: content,
  })
  return renderView(View)
}

module.exports = new Map([
  ['/', createFileRenderer('home/index')],
  ...posts.map(post => {
    const file = path.resolve(__dirname, 'blog', post)
    const route = `/blog/${post.split('.md')[0]}`
    const render = () => renderBlogPost(file)
    return [route, render]
  })
])
