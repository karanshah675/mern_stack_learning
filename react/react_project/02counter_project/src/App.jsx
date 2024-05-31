import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  const addvalue = () =>{
    if(counter==20) return
    else setCount(counter+1)
  }
  const removevalue = () =>{
    if(counter==0) return
    else setCount(counter-1)
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>click to add</button>
      <br />
      <button onClick={removevalue}>click to remove</button>
    </>
  )
}

export default App
