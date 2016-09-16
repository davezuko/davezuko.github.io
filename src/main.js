require('fp-standard/installer')(global)

var r   = require('./lib/react')
  , App = require('./components/app')
  require('./styles/main.sass')

// Let's Go!
// ------------------------------------
r.dom.render(r(App), window.root)

// Devtool Contact Information
// ------------------------------------
;(function () {
  var ASCII, e

  ASCII = [
    ' ____              _     _   _____     _                     _    _'
  , '|  _ \\  __ ___   _(_) __| | |__  /   _| | _______      _____| | _(_)'
  , '| | | |/ _` \\ \\ / / |/ _` |   / / | | | |/ / _ \\ \\ /\\ / / __| |/ / |'
  , '| |_| | (_| |\\ V /| | (_| |  / /| |_| |   < (_) \\ V  V /\\__ \\   <| |'
  , '|____/ \\__,_| \\_/ |_|\\__,_| /____\\__,_|_|\\_\\___/ \\_/\\_/ |___/_|\\_\\_|'
  ].join('\n')

  // Because scrapers suck...
  e = (function () {
    var cc2 = map(inc, [134, 76, 112, 117, 130, 109, 112])
      , cc1 = [114, 122, 59, 124, 120, 130]
      , ccl = add(length(cc1), length(cc2))

    return pipe(
      concat
    , reverse
    , map(pipe(subtract(ccl), String.fromCharCode.bind(String)))
    , join(''))(cc1, cc2)
  })()

  console.log('%c' + ASCII, 'color:#93C953;white-space:pre;font-family:monospace;font-size:0.85rem;')
  console.log(
    '%c Email: ' + e + ' | %c Github: https://github.com/davezuko'
  , 'font-size:0.75rem;color:#0743CA'
  , 'font-size:0.75rem;color:#5FAB06'
  )
})()
