import * as React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import * as path from 'path'
import HTML from './src/components/Html.tsx'
import App from './src/components/App.tsx'

export default {
  // Project Structure
  // ----------------------------------
  src: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/main.tsx'),
  dest: path.resolve(__dirname, 'dist'),

  // Rendering
  // ----------------------------------
  render: (req, res) => {
    const html = `<!doctype html>` + renderToStaticMarkup(
      <HTML
        styles={req.assets.css}
        scripts={req.assets.js}
      >{renderToString(<App />)}</HTML>
    )
    res(null, html)
  },
}
