import React from 'react'
import { useState } from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString()
  const [currTime , setCurrTime] = useState(time)
  
  const updateTime =()=>{
    let time = new Date().toLocaleTimeString()
    setCurrTime(time)
  }
  setInterval(updateTime)

  return (
    <div className='rounded-lg absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-zinc-300 text-black font-bold p-10 text-8xl w-fit'>{time}</div>
  )
}

export default App