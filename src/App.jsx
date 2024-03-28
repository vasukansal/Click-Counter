import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount]=useState(0)
  function addvalue(){
    setCount(++count)
  }
  function decvalue(){
    let temp=count-1;
    if(temp<0){
      alert("Count Cannot be Negative")
    }else{setCount(--count)}
    
  }
  return (
    <>
      <h2>im here</h2>
      <h4 id='countt'>Count: {count}</h4>
      <button onClick={addvalue}>Add Value</button><br/>
      <button onClick={decvalue}>Decrease Value</button>
    </>
  )
}

export default App
