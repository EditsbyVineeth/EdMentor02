import React from 'react'

function Courses() {
  return (
    <div className=' w-full p-20 mt-80 md:mt-20 flex justify-center'>
        <div className='p-4 md:w-10/12 bg-orange-400'>
          <section className=' flex flex-row items-center justify-evenly text-xl gap-4 md:text-4xl font-serif'>
              <div className='flex flex-col'><span>Courses </span><span>40+</span> </div>
              <div className='flex flex-col'><span>Students </span><span>1500+</span> </div>
              <div className='flex flex-col'><span>Followers </span><span>1M+</span> </div>
  
          </section>
        </div>

    </div>
  )
}

export default Courses