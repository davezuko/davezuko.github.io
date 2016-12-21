var r = require('../lib/react')
var posts = [
  { title: 'Eradicate Runtime Errors in React with Flow',
    href: 'http://technologyadvice.github.io/eradicate-runtime-errors-in-react-with-flow/' },
  { title: 'Where Flux Went Wrong',
    href: 'http://technologyadvice.github.io/where-flux-went-wrong/' }]

function Post (props) {
  return (
    r('li', { key: props.title },
      r('a', { href: props.href }, props.title)))}

function App () {
  return (
    r('main', null,
      r('h1', null, 'David Zukowski'),
      r('h2', null, 'About'),
      r('p', null, "Hey there, I'm a front-end developer currently obsessed with functional programming. I work professionally on large scale ReactJS applications, and in my free time enjoy contributing to the open source community and playing around with Clojure and Elm. Outside of work, I spend much of my time reading, playing tennis, and traveling."),
      r('p', null, "In the past I have worked on enterprise AngularJS applications, and before that developed websites for clients including Hilton Worldwide, Kimberly Clark, and Smucker's Natural Foods."),
      r('h2', null, 'Writing'),
      r('ul', null, map(Post, posts))))}

module.exports = App
