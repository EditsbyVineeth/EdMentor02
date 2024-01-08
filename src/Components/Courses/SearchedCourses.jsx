import React,{useEffect} from 'react'
import { useAppContext } from '../AppContext'
// import CourseCard from './CourseCard'

import Finance from '../Data/Finance.json'
import Graduation from '../Data/Graduation.json'
import MoneyManagement from '../Data/MoneyManagement.json'
import School from '../Data/School.json'
import Skills from '../Data/Skills.json'
import StockMarket from '../Data/StockMarket.json'

import sampleImg from '../../images/blogs/2.jpg'

function SearchResult() {

    const { searchTerm, filteredData, setFilteredData } = useAppContext();

    const combinedData=[
        ...Finance,...Graduation,...MoneyManagement,...School,...Skills,...StockMarket
    ]

    
  useEffect(() => {
    // Simulating data filtering when searchTerm changes
    const filteredCourses = combinedData.filter((item) =>
      item.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredCourses);
  }, [searchTerm]);



  return (
  
  <div className='w-full flex flex-wrap justify-evenly items-center pt-32 px-4 gap-6 md:gap-12 '>
      
         { filteredData.map((item,key)=>( 
          <div className=' bg-gradient-to-r  from-sky-200 to-sky-100  w-48 md:w-56  h-auto hover:scale-105 transition-all duration-300
             md:h-auto flex flex-col items-center p-1 md:p-2'>
              <img src={sampleImg} alt='samplePic'/>
                <h1 className=' text-left font-semibold text-md leading-tight md:text-xl'>{item.course}</h1>
               <div className=' flex flex-col justify-stretch text-sm md:text-md'>
                     { item.point1 && <span> {item.point1}. </span> }
                     { item.point2 && <span> {item.point2 }.</span> }
                     { item.point3 && <span> {item.point3}. </span> }
                     <span className=' md:text-lg font-semibold cursor-pointer'> Tution Fees: {item.Price} </span>
                    <span className=' md:text-lg font-semibold cursor-pointer'> Time Duration :{item.Duration} </span>
               </div>
          </div>
         ))
         }
      </div>
  
  )
}

export default SearchResult