import { useState } from 'react'

import './App.css'
import Card2 from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center bg-red-500 p-5 rounded-xl">
        Golu kumar web
      </h1>
      <Card2 btnText="about that" title="golu kumar"  />
      <Card2 btnText="contact me"  />
    </>
  )
}

export default App
