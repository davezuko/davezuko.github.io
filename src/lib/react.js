var React    = require('react')
  , ReactDOM = require('react-dom')

var _slice = [].slice
function contains (c, a) { return a.indexOf(c) !== -1 }
function withoutLast (xs) { return _slice.call(xs, 0, dec(length(xs))) }
function trim (s) { return s.trim() }

var hyperToReact = (function () {
  var splitTags = pipe(split('>'), map(trim))

  // Noop atm
  function mergeHyperProps (props, hsTag) { return props }

  /**
   * @param {String} tag - the tag name to parse from HyperScript into
   * a tree of React elements.
   * @param {[Object]} props - the props of the child element.
   * @pram {[React.Element[]]} children - the children of the child element.
   *
   * @returns {React.Element}
   */
  return function hyperToReact (tag, props, children) {
    var tags       = splitTags(tag)
      , parents    = withoutLast(tags)
      , childType  = last(tags)
      , childProps = mergeHyperProps(props, childType)
      , child

    if (!children || length(children) <= 1) {
      child = r(childType, childProps, first(children))
    } else {
      child = r.apply(null, concat([childType, childProps], children))
    }
    return foldr(function (acc, t) { return r(t, mergeHyperProps(null, t), acc)},
                 parents)
  }
})()

/**
 * @param {String|Function} type - the type of element to create.
 * @param {[Object]} props - the props to apply to the element.
 *
 * @returns {React.Element}
 */
function r (type, props, c0, c1, c2, c3, c4) {
  if (is('string', type) && contains('>', type)) {
    return hyperToReact(type, props, _slice.call(arguments, 2))
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
