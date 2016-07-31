import * as path from 'path'
import * as webpack from 'webpack'

const env = process.env.NODE_ENV || 'development'

export default {
  entry: {
    app: [
      path.resolve(__dirname, 'src', 'main.tsx')
    ]
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist/scripts'),
    publicPath: '/scripts'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ].concat(process.env.NODE_ENV === 'production'
    ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      })
    ]
    : [
      new webpack.NoErrorsPlugin()
    ]),
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts'
      }
    ],
  },
}
