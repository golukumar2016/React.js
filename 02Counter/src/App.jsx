import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const adder = () => {
    setCount(count + 1)
  }
  const subtractor = () => {
    if(count > 0){
    setCount(count - 1)

    }
  }
  return (
    <>
      <h1>Value counter {count}</h1>
       <button onClick={adder}>add value {count}</button>
        <button onClick={subtractor}>subtract value {count}</button>
      
     
    </>
  )
}

export default App
