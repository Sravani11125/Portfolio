import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return <>
  <div className='min-h-[660px] w-100% flex gap-5 p-10 justify-center items-center'>
    <div className='h-[300px] w-[30%] border-2 rounded-[16px] flex flex-col p-10 flex flex-col justify-center items-center bg-[#EFEEEA]'>
      <div className=' h-[50%] gap-y-3'>
      <section className='flex gap-x-3 '>
        <h1 className='text-xl'><b>Phone</b></h1>
        <h1 className='text-xl'><b>:</b></h1>
        <h1 className='text-xl'>6309801593</h1>
      </section>
      
      <section className='flex gap-x-5'>
        <h1><h2 className='text-xl'><b>Email</b></h2></h1>
        <h1 className='text-xl'><b>:</b></h1>
        <h1 className='text-xl'>sravaniboddu01@gamil.com</h1>
      </section>
      
      {/* //logos */}
      <div className='h-[50%] w-[80%]  flex gap-x-8 ml-[100px] mt-[50px]'>
        <section className=' h-[90%] w-[20%] flex justify-center items-center rounded-[10px] hover:bg-[#183B4E] hover:text-white'>
          <a href="http://www.linkedin.com/in/sravani-boddu-b39818347"  >
          <FaLinkedin size={40} /></a></section>
        <section className='h-[90%] w-[20%] flex justify-center items-center rounded-[10px]  hover:bg-[#183B4E] hover:text-white'>
          <a href="https://github.com/Sravani11125"><FaGithub  size={40}/></a></section>
      </div>
      </div>
      

    </div>
  </div>
  
  </>
}

export default Contact
