import React from 'react'
import {useState , useEffect} from 'react'
function Github() {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Amitkumarak90p')
        .then(response => response.json())
        .then(data =>{
                setData(data)
            }
        )
    }, [])
  return (
    <>
     <h2>Git followers : {data.followers}</h2>
    </>
  )
}

export default Github