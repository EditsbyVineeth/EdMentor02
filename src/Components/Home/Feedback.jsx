import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import FeedbackCard from '../../CustomComponents/FeedbackCard';

import student1 from '../Data/Feedbacks/Student1.json'
import student2 from '../Data/Feedbacks/Student2.json'
import student3 from '../Data/Feedbacks/Student3.json'
import student4 from '../Data/Feedbacks/Student4.json'

import pic1 from '../../images/students/st1.jpg'
import pic2 from '../../images/students/st2.jpg'
import pic3 from '../../images/students/st3.jpg'
import pic4 from '../../images/students/st4.png'
import pic5 from '../../images/students/st5.png'
import pic6 from '../../images/students/st6.png'
import pic7 from '../../images/students/st7.png'

import { motion } from 'framer-motion';


function Feedback() {
  return (
    <div className=' w-full bg-gray-100 flex flex-col items-center justify-center mt-44 p-4'>
 
           
           <motion.div className='-mt-10 text-pink-600 bg-white rounded-full'
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
           > 
           <FaUserGraduate size={40}/> 
           </motion.div>

           <span className=' text-2xl md:text-4xl font-bold mt-4'>What Our Students Say About Us ?</span>
           <span className=' text-md md:text-xl mt-4'>
           77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.
           </span>

           <div className= 'w-full flex flex-wrap md:flex-row justify-evenly gap-10  mt-6 md:mt-20 p-8'>

           
             <FeedbackCard Student_Pic={pic1} data={student1}/>
             <FeedbackCard Student_Pic={pic2} data={student2}/>
             <FeedbackCard Student_Pic={pic3} data={student3}/>
             <FeedbackCard Student_Pic={pic4} data={student3}/>
             <FeedbackCard Student_Pic={pic5} data={student3}/>
             <FeedbackCard Student_Pic={pic6} data={student3}/>

           </div>
       
    </div>
  )
}

export default Feedback