import React from 'react'
import Header from '../componant/Header'
import Middel from '../componant/Middel'
import Footer from '../componant/Footer'

export default function Home() {
  return (
    <div>
      <div className='w-full h-screen bg-blue-200 '>
    <div className=" h-[10%] ">
       <Header/>
    </div>
     <div className=" h-screen bg-blue-400 ">
      <Middel/>
     </div>
     <div className="bg-gray-900 h-[10%] items-center ">
     <Footer/>
     </div>
    
    </div>
    </div>
  )
}
