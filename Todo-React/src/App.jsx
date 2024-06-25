import React, { useState } from 'react'
import Navbar from './components/Navbar'



const App = () => {
 const [title, setTitle] = useState("")
 const [desc, setDesc] = useState("")
 const [mainTask,setMainTask] = useState([])
 const [editIndex, setEditIndex] = useState(null); // Track the index of the task being edited



 const handleTitle = (e) => {
  setTitle(e.target.value)
 }
 const handleDesc = (e) => {
  setDesc(e.target.value)
 }
 
 const handleSubmit = (e)=>{
    e.preventDefault()
    if (editIndex === null) {
      // If not in edit mode, add a new task
      setMainTask([...mainTask, { title, desc }]);
    } else {
      // If in edit mode, update the existing task
      const updatedTasks = [...mainTask];
      updatedTasks[editIndex] = { title, desc };
      setMainTask(updatedTasks);
      setEditIndex(null); // Exit edit mode
    }
    setDesc("")
    setTitle("")
 }
 
  const handleDelete = (index)=>{
   let copies = [...mainTask]
   copies.splice(index,1)
   setMainTask(copies)
  }

  const handleEdit = (index) => {
   // Set the title and description of the task being edited
   setTitle(mainTask[index].title);
   setDesc(mainTask[index].desc);
   setEditIndex(index); // Enter edit mode
 };

  return (

    <>
    <div className="main min-h-screen w-screen bg-zinc-900 pb-5">
         <Navbar/>
     <div className="addTodos px-10">
         <form onSubmit={handleSubmit} action="">
         <h2 className='text-white font-semibold text-2xl mb-2'>Add Tasks✅</h2>
      <input value={title} onChange={handleTitle} className='px-5 py-2 bg-zinc-800 w-full text-white outline-none rounded-md' type="text" placeholder='Enter your task' />
      <textarea value={desc} onChange={handleDesc} className='px-5 py-2 bg-zinc-800 w-full text-white outline-none rounded-md mt-3 resize-none' placeholder='Description'></textarea>
      <button  className='px-5 py-2 bg-blue-600 mt-4 text-white rounded-md font-medium'> {editIndex !== null ? 'Update Task' : 'Add Task'}</button>
         </form>
      </div> 

      <h2 className='px-10 text-white font-medium text-3xl mt-10'>Your tasks</h2>  

      <div className="Todos px-10 flex flex-wrap gap-5 ">
            
       {mainTask.map((item,index)=>{
              return <div key={index} className="todo mt-5 flex  flex-col items-baseline gap-6 bg-zinc-800 px-5 py-2 rounded-md w-fit">
               <h1 className= "text-white text-lg font-medium">{item.title}</h1>
               <p className='text-zinc-400 text-sm w-52'>{item.desc}</p>
               <div className='flex gap-3'>
               <button  onClick={() => handleEdit(index)} className='bg-green-600 text-white rounded-md px-3 py-1'>Edit</button>
               <button onClick={()=>{handleDelete(index)}} className='bg-red-600 text-white  rounded-md px-3 py-1'>Delete</button>
               </div>
        
              </div>
       })}     
   
      
      </div>
         
    </div>

    </>
  )
}

export default App