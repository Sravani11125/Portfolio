import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  let link={
    
  }
  
  return (
   
    <div>
      {/* header nav ------------------------------------------------------------------- */}
      <section className='p-5 bg-[#222831] h-[70px] w-[100%] text-white flex justify-evenly font-sans '>
  
        <div className='text-[#FE5D26] h-[30px] w-[30%]  flex justify-center items-center text-4xl'>
          <b>Sravani Boddu</b>
        </div>
       <div className='h-[30px] w-[50%]   ml-[30%]'>
      <ul className=' flex justify-evenly text-lg ' >
        <li >
          <Link to="/home" className='hover:underline hover:text-[#FE5D26] '>Home</Link>
        </li>
        <li  >
          <Link to="/about" className='hover:underline hover:text-[#FE5D26] '>About</Link>

        </li>
        <li >
          <Link to="/contact" className='hover:underline hover:text-[#FE5D26] '>Contact</Link>

        </li>
      </ul>
      
      </div> 
      
      
      </section>
    </div>
  )
}

export default Navbar
