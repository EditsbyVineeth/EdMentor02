import React from 'react'
import bgImage from '../../images/blogs/elearning_background.png'



function WelcomePage() {
  return (
    <div  className=' flex justify-center md:justify-evenly flex-col md:flex-row w-full bg-re\'>
      <div className=' w-full md:w-1/2 p-4 md:p-8 flex flex-col'>
        <span className=' text-5xl md:text-7xl font-semibold  text-transparent bg-clip-text
        bg-gradient-to-tr from-pink-400 to-orange-300'>
           Edumentor Your perfect learning partner</span>
        <span className=' text-xl  mt-4'>Start learning today for free, register today pay later</span>
        <div className=' flex flex-row'>
          <button className=' w-32 h-12 m-4 bg-pink-600 p-2 rounded-sm border-2 hover:bg-white text-white font-semibold'>Register</button>
          <button className=' w-32 h-12 m-4 bg-pink-600 p-2 rounded-sm border-2 hover:bg-white text-white font-semibold'>Explore</button>
        </div>
        
      </div>
        
      <div className=' w-full md:w-1/2'>
        <img src={bgImage} alt='background' />

      </div>
    </div>
  )
}

export default WelcomePage