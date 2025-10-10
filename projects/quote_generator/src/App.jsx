import { useCallback, useState } from 'react'


function App() {
  const [quote , setQuote] = useState('')
  const [author , setAuthor] = useState('')
  const fetchQuote = ()=>{
    console.log('button clicked');
    
    fetch("https://quotes-api-self.vercel.app/quote").then((res) => res.json()).then((res)=> {
      setQuote(res.quote)
      setAuthor(res.author)
    });
    return {quote,author}
  }
  return (
    <>
      {/* <h1 className='text-3xl text-center text-white text-bold'>Quote Generator</h1>
      <div>
        
        <p className='text-2xl text-white'>{quote}</p>
      </div> */}

      <div className='w-full h-full flex justify-center align-middle'>
        <div className='bg-amber-400 shadow-amber-900 w-5xl h-5xl'>
          <p className='text-xl'>{quote}</p>
        </div>
        <div>
          <button className='hover:bg-green-500 bg-blue-400 text-white text-2xl px-4 py-2 rounded cursor-pointer '
        onClick={fetchQuote}>
          Generate Quote
        </button>
        </div>
      </div>
    </>
  )
}

export default App
