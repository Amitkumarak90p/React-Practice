import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter]= useState(10);
  const addValue = ()=>{
    setCounter(counter+1);
    if(counter>=20){
      setCounter(20);
    }
  }
  const removeValue = ()=>{
    setCounter(counter-1);
    if(counter<=0){
      setCounter(0);
    }
  }


  return (
    <>
      <h1>First react code using the usestate hook </h1>
      <h2>Count value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
