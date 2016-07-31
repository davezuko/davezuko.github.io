import * as React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import App from '../../src/components/App.tsx'
import Html from '../../src/components/Html.tsx'

const renderApp = () => {
  const html = `<!doctype html>` + renderToStaticMarkup(
    <Html>
      <App />
    </Html>
  )
  return html
}

export default renderApp
