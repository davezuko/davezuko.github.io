const r = require('../lib/react')
const { mapi } = require('redash')

const META = new Map([
  ['viewport',                 'width=device-width, initial-scale=1, shrink-to-fit=no'],
  ['google-site-verification', 'hvYlF72G6vlrz-XLjdsyLaEhqsmPDRYy2qR96KHmXhY'],
  ['description',              'Homepage for David Zukowski'],
  ['author',                   'David Zukowski'],
])

const Style = ({ href, body }) =>
  body ? r('style', { dangerouslySetInnerHTML: { __html: body } })
       : r('link', { rel: 'stylesheet', href })

const Script = ({ src }) =>
  r('script', { src })

const Head = ({ styles }) =>
  r('head', null,
    r('meta', { charSet: 'utf-8' }),
    r('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
    r('title', null, 'David Zukowski | Software Engineer'),
    mapi(([name, content]) => r('meta', { key: name, name, content }), Array.from(META)),
    mapi((style, i) => r(Style, Object.assign({ key: i }, style)), styles))

const HTML = ({ children, styles = [], scripts = [] }) =>
  r('html', { className: 'no-js', lang: 'en-US' },
    r(Head, { styles }),
    r('body', null,
      r('div', { dangerouslySetInnerHTML: { __html: children } }),
      mapi(({ src }) => r(Script, { key: src, src }), scripts)))

module.exports = HTML
