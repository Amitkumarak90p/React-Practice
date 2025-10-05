import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button 
          onClick={()=> setColor("red")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-white'
          style={{backgroundColor: "red"}} 
          >Red</button>

          <button 
          onClick={()=> setColor("green")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-white'
          style={{backgroundColor: "green"}} 
          >Green</button>

          <button 
          onClick={()=> setColor("blue")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-white'
          style={{backgroundColor: "blue"}} 
          >Blue</button>

          <button 
          onClick={()=> setColor("pink")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-white'
          style={{backgroundColor: "pink"}} 
          >Pink</button>

          <button 
          onClick={()=> setColor("grey")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-white'
          style={{backgroundColor: "grey"}} 
          >Grey</button>

          <button 
          onClick={()=> setColor("yellow")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-black'
          style={{backgroundColor: "yellow"}} 
          >Yellow</button>

          <button 
          onClick={()=> setColor("black")}
          className='rounded-full px-4 py-2 outline-none shadow-xl text-white'
          style={{backgroundColor: "black"}} 
          >Black </button>
        </div>
      </div>
    </>
  )
}

export default App
