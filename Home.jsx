import React from 'react'
import resume from "../../public/BodduSravani.pdf"

const Home = () => {
  return <>
  
    <div className='min-h-[660px] w-100% flex gap-5 p-10 justify-center '>
      <div  className=' w-[40%] flex justify-center items-end  '>
        <div className='  flex flex-col h-[400px] w-[70%]  font-sans'>
          <b><h3 className='text-2xl'>Hi</h3></b>
         <b> <h1 className='text-4xl'>I'm <span className='text-[#FE5D26]'>Sravani</span></h1></b>
         <b> <h1 className='text-4xl'>a Full Stack Developer</h1></b><br />
          <p className='text-xs'>Passionate and detail-oriented Java Full Stack Developer with expertise in building scalable, high-performance applications. Skilled in both front-end and back-end development.</p>
          <div className='mt-[30px]'>
            <a href={resume} download="portfolio/public/BodduSravani.pdf">
              <button className='h-[40px] w-[40%] border-1 rounded-[25px] bg-[#183B4E] text-white hover:bg-[#FF0B55]'>download resume</button>
              </a>
          </div>
        </div>


      </div>
      <div className=' w-[40%] flex justify-center items-center'>
        <div className=' rounded-[50%] h-[300px] w-[40%]'>
          <img src="./src/assets/sravani.jpg" alt="not found" className='rounded-[50%] h-[300px]' />
        </div>
        
      </div>
      
    </div>


    </>

  
}

export default Home
