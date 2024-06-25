import React, { useState } from 'react'

const App = () => {
  const [counter,setCounter] = useState(0)
  
  
  const incriment = ()=>{
    setCounter((prev)=>prev+1)
  }
  const decriment = ()=>{
    setCounter((prev)=>prev-1)
  }
  const Reset = ()=>{
    setCounter(0)
  }
  
  return (
    <>
    <div className=" h-screen w-screen bg-gray-800 flex items-center justify-center flex-col ">
        <div className='p-10 bg-gray-600 text-8xl text-white w-fit rounded font-extrabold'>{counter}</div>
        <div className=' flex gap-5 mt-5'>
        <button onClick={incriment}  className='bg-gray-500 text-white px-5 py-3 rounded-lg font-semibold '>Incriment</button>
        <button onClick={Reset}  className='bg-gray-500 text-white px-5 py-3 rounded-lg font-semibold '>Reset</button>
        <button onClick={decriment} className='bg-gray-500 text-white px-5 py-3 rounded-lg font-semibold'>Decriment</button>
        </div>
    </div>

    </>
  )
}

export default App