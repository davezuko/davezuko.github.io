import React from 'react'

const posts = [
  { title: 'Eradicate Runtime Errors in React with Flow',
    href: 'http://technologyadvice.github.io/eradicate-runtime-errors-in-react-with-flow/' },
  { title: 'Where Flux Went Wrong',
    href: 'http://technologyadvice.github.io/where-flux-went-wrong/' }]

const projects = [
  { title: 'halcyon &mdash; Lightweight Functional Programming for JavaScript',
    source: 'https://github.com/davezuko/halcyon',
    href: 'https://halcyon.zuko.me' },
  { title: 'react-reformed &mdash; A Simpler Approach to Forms in React',
    source: 'https://github.com/davezuko/react-reformed',
    href: 'https://react-reformed.zuko.me' }]

const App = () => (
  <main>
    <h1>David Zukowski</h1>
    <h2>About</h2>
    <p>Hey there, I'm a front-end developer currently obsessed with functional programming. I work professionally on large scale ReactJS applications, and in my free time enjoy contributing to the open source community and playing around with Clojure and Elm. Outside of work, I spend much of my time reading, playing tennis, and traveling.</p>
    <p>In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker's Natural Foods.</p>
    <h2>Writing</h2>
      <ul>
        {map(post => (
          <li key={post.title}>
            <a href={post.href}>{post.title}</a>
          </li>
        ), posts)}
      </ul>
    <h2>Projects</h2>
      <ul>
        {map(project => (
          <li key={project.title}>
            <a href={project.href} dangerouslySetInnerHTML={{ __html: project.title }} />
          </li>
        ), projects)}
      </ul>
  </main>
)

export default App
