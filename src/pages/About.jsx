import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
             
    const navig= useNavigate()

    const gohome = () =>{
      navig('/')
    }

  return (
    <div className='w-full h-screen bg-gray-400 flex items-center justify-center  gap-2'>
      <div className=" body-col bg-teal-400 w-auto  justify-center ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s" alt="" className='rounded rounded-[50%] m-25 ' />
      <h1 className="text-bold text-xl text-center my-20 text-blue-700  ">Hello I am Naddim shaikh </h1>
          <button className='bg-blue-800 rounded rounded-30px p-2 outline outline-green-600 cursor-pointer hover:bg-blue-400 mx-50 ' onClick={gohome} > Home</button>
      </div>
      <div className="flex  bg-violet-400 my-2	w-auto h-screen p-4 border border-red-900  ">
        <p className="text-center my-50 ">I am a passionte frontend devloper with hands on experience in <span className='text-bold text-xl '>React.js,JavaScript,MonngoDB,Tailwind CSS and Familiar with Java</span> I recently developed a Wep-Chat Web Application Project. <br />
          I am constantly learning new tecnology and love turning complex problems into simple beautiful UI designs. i am currently seeking opportunities to grow in  collbrative tech environment. </p>
      </div>
    </div>
  )
}
