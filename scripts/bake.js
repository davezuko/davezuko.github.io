import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import App from '../src/components/App'

const templatePath = path.resolve(__dirname, '../dist/index.html')
const template = fs.readFileSync(templatePath, 'utf8')
const rendered = renderToString(<App />)
const final = template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)

fs.writeFileSync(templatePath, final, 'utf8')
