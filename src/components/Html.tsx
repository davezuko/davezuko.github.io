import * as React from 'react'

interface HtmlProps {
  children?: React.ReactNode,
  scripts?: Array<string>,
  styles?: Array<string>,
}
class Html extends React.Component<HtmlProps, void> {
  render () {
    return (
      <html>
        <head>
          <title>David Zukowski</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
          {this.props.styles.map(style => (
            <link key={style} rel='stylesheet' href={style} />
          ))}
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{ __html: this.props.children }} />
          {this.props.scripts.map(script => (
            <script key={script} src={script} />
          ))}
        </body>
      </html>
    )
  }
}

export default Html
