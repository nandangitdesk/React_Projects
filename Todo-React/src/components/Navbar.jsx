import React from 'react'

const Navbar = () => {
  return (
   <nav className='w-full px-10 py-3  flex justify-between items-center text-white'>
     <div className="logo bg-zinc-800 px-5 py-2 rounded-full">
      <h1 className='text-2xl font-semibold'>iText-Todo</h1>
     </div>
     <div className="navlinks flex items-center gap-8 text-white px-5 ">
      <a href="#">Home</a>
      <a href="#">Your Tasks</a>
     </div>
   </nav>
  )
}

export default Navbar