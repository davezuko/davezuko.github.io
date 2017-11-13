const r = require('../lib/react')

const BlogPost = ({ title, children }) =>
  r('main', { className: 'container' },
    r('article', { className: 'post' },
      r('header', { className: 'post__header' },
        r('h1', { className: 'post__title' }, title)),
      r('div', { dangerouslySetInnerHTML: { __html: children } })))

module.exports = BlogPost
