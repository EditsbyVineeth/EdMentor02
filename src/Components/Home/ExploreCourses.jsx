import React from 'react'
import CourseImg from '../../images/blogs/ExploreCourse.jpg'
import { VscSearch } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function ExploreCourses() {
  return (
    <div  className= 'flex flex-col md:flex-row w-full mt-32 items-center justify-center gap-12'>
         <img src={CourseImg} className=' md:w-1/2' alt='course' />   
        <div className='  border-2 border-pink-600  text-pink-600 h-44 w-44 rounded-full p-12  flex flex-col items-center justify-center font-semibold text-2xl'>
            <Link to='/course'> Explore Courses </Link>
             <span className=' text-4xl'> <VscSearch/> </span>  
        </div>
    </div>
  )
}

export default ExploreCourses