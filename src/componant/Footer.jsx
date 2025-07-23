import React from 'react'

function Footer() {
  return (
    <div className='flex body-flex justify-center'>
      <div className=" flex body-flex gap-4 items-center  ">
        <input type="email" name='email' placeholder='Email' className='outline gap-4 rounded placeholder-blue-300 outline-blue-500 text-white outline-2 p-1 ml-center' />
        < a className='hover:underline hover:red-200 text-blue-100 gap-4' href='https://github.com/code-nadim'>My-GitHub</a>
        <a className='hover:underline hover:red-200 text-blue-100' href=''>Linkedin</a>
      </div>
    </div>
  )
}

export default Footer
