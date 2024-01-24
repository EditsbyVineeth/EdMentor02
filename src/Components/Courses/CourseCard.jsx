import React from 'react'

function CourseCard({data,img,CourseTitle}) {
  return (
    
    <>
      <div className='w-full coursePage flex-col justify-center items-center py-20'>
       <div className=' text-center font-semibold text-xl md:text-4xl p-6 uppercase
        bg-gradient-to-r from-pink-700 to-blue-500 text-transparent bg-clip-text  '>{CourseTitle} </div>
      <div className='p-2  justify-evenly gap-2 py-14 md:px-16 flex flex-row flex-wrap md:gap-12'>
  
         { data.map((item,key)=>(
          <div className=' bg-stone-200 shadow-xl w-48 my-2 md:w-56  h-auto md:h-auto -z-10
           transition-all duration-300 hover:scale-105  flex flex-col items-center'>
              <img src={img} alt='courcePic'/>
                <h1 className=' text-left font-semibold text-lg md:text-xl md:leading-tight'>{item.course}</h1>
               <div className=' flex flex-col justify-stretch text-sm md:text-md p-2 md:p-4'>
                    <span> {item.point1}. </span>
                    <span> {item.point2}.</span>
                    <span> {item.point3}.</span>
                    <span className=' md:text-lg font-semibold cursor-pointer'> Tution Fees: {item.Price} </span>
                    <span className=' md:text-lg font-semibold cursor-pointer'> Time Duration :{item.Duration} </span>
               </div>
          </div>
         ))
         }
  
      </div>
      </div>
    </>
  )
}

export default CourseCard