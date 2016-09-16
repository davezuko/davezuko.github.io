var r = require('../lib/react')

function Style (props) {
  return r('link', { key: props.href, rel: 'stylesheet', href: props.href })}

function Script (props) {
  return r('script', { key: props.src, src: props.src })}

function HTML ({ children, scripts, styles }) {
  return (
    r('html', null,
      r('head', null,
        r('title', null, 'David Zukowski'),
        r('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }),
        map(Style, concat([{ href: 'https://fonts.googleapis.com/css?family=Open+Sans' }], styles))),
      r('body', null,
        r('div', { id: 'root', dangerouslySetInnerHTML: { __html: children }}),
        map(Script, scripts))))}

module.exports = HTML
