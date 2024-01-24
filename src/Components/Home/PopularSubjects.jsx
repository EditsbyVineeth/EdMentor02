import React from 'react'

function PopularSubjects() {
  return (
    <div className=' text-center mt-16 flex flex-col items-center justify-center z-50'>
        <span className=' text-3xl'>Popular Subjects on EduMentor</span>
        <div  className=' md:w-8/12 m-4'>
            <div className=' grid grid-cols-3 font-sans md:grid-cols-4 gap-2 md:gap-4 items-center '>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Life Skills</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Mathematics</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Science</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Biology</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Finance</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Science</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Stock Market</span>
                <span className= ' popular_courses shadow-xl md:text-2xl font-normal h-20 flex items-center justify-center border-pink-600 hover:bg-pink-200 rounded-xl border-2 p-10'>Money Management</span>


            </div>

        </div>
    
    </div>
  )
}

export default PopularSubjects