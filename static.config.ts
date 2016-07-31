import * as path from 'path'
import App from './src/components/App.tsx'
import Html from './src/components/Html.tsx'

export default {
  entry: path.resolve(__dirname, 'src/main.tsx'),
  dest: path.resolve(__dirname, 'dist'),
  scriptsDir: 'scripts',
}
