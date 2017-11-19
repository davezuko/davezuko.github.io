const r = require('../lib/react')
const { mapi } = require('redash')

const META = new Map([
  ['viewport', 'width=device-width, initial-scale=1, shrink-to-fit=no'],
  ['google-site-verification', 'hvYlF72G6vlrz-XLjdsyLaEhqsmPDRYy2qR96KHmXhY'],
])

const Head = ({ styles }) =>
  r('head', null,
    r('title', null, 'David Zukowski | Software Engineer'),
    mapi(([name, content], i) => r('meta', { key: i, name, content }), Array.from(META)),
    mapi(({ href, body }, i) =>
      body ? r('style', { key: i, dangerouslySetInnerHTML: { __html: body } })
           : r('link', { key: i, rel: 'stylesheet', href }), styles))

const HTML = ({ children, styles = [], scripts = [] }) =>
  r('html', null,
    r(Head, { styles }),
    r('body', null,
      r('div', { dangerouslySetInnerHTML: { __html: children } }),
      mapi(({ src }) =>
        r('script', { key: src, src }), scripts)))

module.exports = HTML
