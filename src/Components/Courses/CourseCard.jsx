import React from 'react'

function CourseCard({data,img,CourseTitle}) {
  return (
    
    <>
      <div className='w-full  flex-col justify-center items-center py-32'>
       <div className=' text-center font-semibold text-xl md:text-4xl p-6 uppercase
        bg-gradient-to-r from-pink-700 to-blue-500 text-transparent bg-clip-text '>{CourseTitle} </div>
      <div className='p-2 gap-2 py-14 md:px-16 flex flex-row flex-wrap md:gap-12'>
  
         { data.map((item,key)=>(
          <div className=' bg-gradient-to-r from-blue-300 to-blue-500 w-36 md:w-56  md:h-auto flex flex-col items-center p-1 md:p-2'>
              <img src={img} alt='courcePic'/>
                <h1 className=' text-center font-semibold text-xl'>{item.course}</h1>
               <div className=' flex flex-col justify-start text-sm md:text-md'>
                    <span> {item.point1} </span>
                    <span> {item.point2} </span>
                    <span> {item.point3} </span>
                    <span className=' text-lg font-semibold cursor-pointer'> Tution Fees: {item.Price} </span>
                    <span className=' text-lg font-semibold cursor-pointer'> Time Duration :{item.Duration} </span>
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