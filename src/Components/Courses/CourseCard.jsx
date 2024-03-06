import React from 'react'

function CourseCard({data,img,CourseTitle}) {
  // p-2  justify-evenly gap-2 py-14 md:px-16 flex flex-row flex-wrap md:gap-12
  // bg-stone-200 shadow-xl w-48 my-2 md:w-56  h-auto md:h-auto -z-10
  //         transition-all duration-300 hover:scale-105  flex flex-col items-center
  return (
 
    <>
      <div className='w-full coursePage flex-col justify-center items-center py-20'>
        <div className=' text-center font-semibold text-xl md:text-4xl p-6 uppercase
        bg-gradient-to-r from-pink-700 to-blue-500 text-transparent bg-clip-text  '>{CourseTitle} </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   gap-5 md:gap-10 mt-7 p-5'>
    
          {data.map((item,key)=>(
            <div className=' bg-stone-200 shadow-xl max-w-[380px] mx-auto'>
                <img src={item.img ? item.img :img} alt='courcePic' className=""/>
                  <h1 className=' text-center font-semibold text-lg md:text-xl md:leading-tight'>{item.course}</h1>
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