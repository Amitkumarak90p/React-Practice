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

      <div className='bg-amber-950 w-full h-screen flex flex-col justify-center '>
        <div>
          <h1 className='text-5xl text-white text-center mb-5'>Quote Generator</h1>
        </div>
        <div className='bg-amber-400 w-5xl h-3xl px-20 py-40 self-center items-center'
        style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2023/05/02/15/52/support-7965543_1280.jpg')`}}>
          <img src="" alt="" />
          <p className='text-xl bg-white w-fit px-4 py-3 rounded-2xl'>" {quote} "</p> <br />
           <button className='hover:bg-green-500 bg-blue-400 text-white text-2xl px-4 py-2 rounded cursor-pointer'
        onClick={fetchQuote}>
          Generate Quote
        </button> 
        </div>
      </div>
    </>
  )
}

export default App
