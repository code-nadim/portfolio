import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
             
    const navig= useNavigate()

    const gohome = () =>{
      navig('/')
    }

  return (
    <div className='w-full h-screen bg-gray-400 flex justify-center  gap-2'>
      <div className=" body-col bg-teal-400 w-auto items-center justify-center ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s" alt="" className='rounded rounded-[50%]  w-100 h-60' />
      <h1 className="text-bold text-xl text-center text-blue-700  ">Hello I am Naddim shaikh </h1>
          <button className='bg-blue-800 rounded rounded-30px p-2 outline outline-green-600 cursor-pointer hover:bg-blue-400  ml-28 mt-20 ' onClick={gohome} > Home</button>
      </div>
      <div className="flex  bg-violet-400 mt-60	w-auto h-[130px] p-4 border border-red-900  ">
        <p className="">I am a passionte frontend devloper with hands on experience in <span className='text-bold '>React.js,JavaScript,MonngoDB,Tailwind CSS and Familiar with Java</span> I recently developed a Wep-Chat Web Application Project. <br />
          I am constantly learning new tecnology and love turning complex problems into simple beautiful UI designs. i am currently seeking opportunities to grow in  collbrative tech environment. </p>
      </div>
    </div>
  )
}
