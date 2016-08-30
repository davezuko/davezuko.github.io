var r   = require('./lib/react')
  , App = require('./components/app')
  require('./styles/main.sass')

r.dom.render(r(App), window.root)
