import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  )
};

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://www.google.com',
//     target: '_blank',
//   },
//   children: "click to visit google.com"
// }

const AnotherReactElement =() => {
  return (
    <a href='https://google.com' target='_blank'>Visit Google</a>
  )
}

const anotherValue = "Golu kumar"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  "click to visit google.com",
  anotherValue, // it is a evaluated value or a variable which is passed as a child to the react element
)

createRoot(document.getElementById('root')).render(
  reactElement
)
