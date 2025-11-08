import React from 'react'

function Card({username}) {
  return (
    <div className='h-80 rounded-2xl bg-amber-400 w-xl text-8xl text-shadow-2xs'>Card
    <br />
    {username}
    </div>
  )
}

export default Card