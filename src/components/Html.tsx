import * as React from 'react'

class Html extends React.Component<void, void> {
  render () {
    return (
      <html>
        <head>
          <title>App</title>
        </head>
        <body>
          <div id='root'>
            {this.props.children}
          </div>
          <script src='/scripts/app.js'></script>
        </body>
      </html>
    )
  }
}

export default Html
