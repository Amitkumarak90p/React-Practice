import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str+= '0123456789'
    if(charAllowed) str+= '{[}]|/?.><,)(/*+=-^`~'

    for(let i =1 ; i<array.length ;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
   , [length, numberAllowed, charAllowed,setPassword] )

  return (
    <>
      <div className='w-full h-full bg-black max-w-3xl flex flex-col gap-4 justify-center px-4 py-4'>
        <h1 className='text-3xl font-bold text-center mt-10 text-white'>Password Generator</h1>
        <div className=' p-4'>
          <input type="text"
           value={password}
            name="password"
            placeholder='Password' 
            className='p-2 rounded bg-gray-800 text-white text-center w-xl'
            readOnly
           />
           <button
           className='rounded bg-white px-4 py-2 '>Copy</button>
        </div>
        <label className='text-white
        '> length : {length}</label>
      </div>
    </>
  )
}

export default App
