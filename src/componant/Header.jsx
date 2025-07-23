import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    
  

  return (
    <>
    <div className='flex body-flex bg-gray-400  justify-center '>
       
        <div className="flex body-flex gap-2 items-center text-l font-bold cursor-pointer  ">
         <ul className='flex gap-4'>
          <li className='hover:underline hover:red-200 '><Link to={'/about'}>About Me</Link></li>
          <li className='hover:underline hover:red-200 '><Link to={'/home'}>Home</Link></li>
          <li className='hover:underline hover:red-200 '><Link to={'/project'}>Project</Link></li>
          <li className='hover:underline hover:red-200 '><Link to={'/comtact'}>Contact</Link></li>
         </ul>
        
         <div className=" ">
         <img src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" className=' justify-items-end h-[50px] rounded-[50%]'   alt="" />
           </div>
        </div>

    </div>
    </>
  )
}

export default Header
