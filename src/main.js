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
    ' ____              _     _   _____     _                     _    _',
    '|  _ \\  __ ___   _(_) __| | |__  /   _| | _______      _____| | _(_)',
    '| | | |/ _` \\ \\ / / |/ _` |   / / | | | |/ / _ \\ \\ /\\ / / __| |/ / |',
    '| |_| | (_| |\\ V /| | (_| |  / /| |_| |   < (_) \\ V  V /\\__ \\   <| |',
    '|____/ \\__,_| \\_/ |_|\\__,_| /____\\__,_|_|\\_\\___/ \\_/\\_/ |___/_|\\_\\_|'
  ].join('\n')

  // Because scrapers suck...
  e = (function () {
    var _ = String.fromCharCode.bind(String)
      , n = [120,124,59,122,114]
      , o = [118,113,77,135,130]
      , c = [113,110,131].concat(o.concat(n))
      , t = c.length

    return c.map(function (n) { return _(n - t) }).join('')
  })()

  console.log('%c' + ASCII, 'color: #93C953; white-space: pre; font-family: monospace; font-size: 1rem;')
  console.log(
    '%c Email: ' + e + ' | %c Github: https://github.com/davezuko',
    'font-size: 1rem; color: #0743CA',
    'font-size: 1rem; color: #5FAB06'
  )
})()
