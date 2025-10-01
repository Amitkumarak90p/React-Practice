import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-300 rounded-2xl p-4 w-xl h-25'>hello</h1>
      <Card username = "Amit Kumar "/>
      <Card username = "Raghav Singh Khatri"/>
    </>
  )
}

export default App
