import React from 'react'
import { IoIosStar } from "react-icons/io";

function FeedbackCard({data,user,course,rating,comment, Student_Pic}) {
  return (
    <div className=' feedback_card bg-white rounded-lg md:w-80 shadow-2xl flex flex-col items-center p-4'>
        {data.map((item,id)=>(
    <>
        
                    <div className=' rounded-full object-cover -mt-12 absolute' key={id}>
                        <img src={Student_Pic} alt='' className=' w-24 h-24 rounded-full'/>
                    </div>
                    <div className=' flex flex-col justify-center items-center mt-12'>
                        
                        <span className=' text-blue-700 font-bold opacity-80'>{item.user}</span>
                        <span key={item.id}  className=' font-bold marker opacity-70'>{item.course}</span>
                        <div className=' opacity-70'>{item.comment}</div>
                        <div className=' flex flex-row justify-end'>
                        <div className='flex flex-row items-center'> 
                        <div className=' flex flex-row text-amber-500'>
                        <IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/>
                        </div>
                        <span className='text-md font-serif text-black'>{item.rating}</span> </div>  
                    </div>
            
                    </div>
            
    </>
        ))}
    </div>

  )
}

export default FeedbackCard