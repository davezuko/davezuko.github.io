import * as React from 'react'

class App extends React.Component<void, void> {
  render () {
    return (
      <main>
        <h1>David Zukowski</h1>
        <h2>About</h2>
        <p>Hey there, I'm a front-end developer currently obsessed with all things JavaScript, especially its functional implementations. I work professionally on large scale ReactJS applications, and in my free time enjoy playing around with Clojure and ClojureScript. Outside of work, I spend much of my time reading and traveling.</p>
        <p>In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker's Natural Foods.</p>
        <h2>Writing</h2>
        <ul>
          <li>
            <a href='http://technologyadvice.github.io/eradicate-runtime-errors-in-react-with-flow/'>
              Eradicate Runtime Errors in React with Flow
            </a>
          </li>
          <li>
            <a href='http://technologyadvice.github.io/where-flux-went-wrong/'>
              Where Flux Went Wrong
            </a>
          </li>
          <li>
            <a href='/posts/new-to-js-avoid-angular.md'>
              New to JavaScript? Avoid Angular
            </a>
          </li>
          <li>
            <a href='/posts/relay-and-graphql-introduction.md'>
              Relay and GraphQL Introduction
            </a>
          </li>
        </ul>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href='https://github.com/davezuko/react-redux-starter-kit'>
              React Redux Starter Kit
            </a>
          </li>
          <li>
            <a href='https://github.com/davezuko/react-reformed'>
              React Reformed
            </a>
          </li>
          <li>
            <a href='https://github.com/davezuko/redash'>
              Redash
            </a>
          </li>
          <li>
            <a href='https://github.com/davezuko/halcyon'>
              Halcyon
            </a>
          </li>
        </ul>
      </main>
    )
  }
}

export default App
