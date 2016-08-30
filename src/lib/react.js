var React    = require('react')
  , ReactDOM = require('react-dom')

var _slice = [].slice
function last (xs) {
  return xs[xs.length - 1]
}
function contains (c, a) {
  return a.indexOf(c) !== -1
}
function withoutLast (xs) {
  return xs.slice(0, xs.length - 1)
}

function r (type, props, c0, c1, c2, c3, c4) {
  var types, parents, child

  if (typeof type === 'string' && contains('>', type)) {
    types   = type.split('>').map(function (t) { return t.trim() })
    parents = withoutLast(types)
    child   = arguments.length <= 3
      ? r(r(last(types)), props, c0)
      : r.apply(null, [r(last(types)), props].concat(_slice.call(arguments, 2)))

    return parents.reduceRight(function (acc, t) { return r(t, null, acc) }, child)
  }

  switch (arguments.length) {
    case 0:
    case 1:
    case 2:
    case 3:
      return React.createElement(type, props, c0)
    case 4:
      return React.createElement(type, props, c0, c1)
    case 5:
      return React.createElement(type, props, c0, c1, c2)
    case 6:
      return React.createElement(type, props, c0, c1, c2, c3)
    case 7:
      return React.createElement(type, props, c0, c1, c2, c3, c4)
    default:
      return React.createElement.apply(null, _slice.call(arguments))
  }
}
r.dom = ReactDOM

module.exports = r
