import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import './Nav.css'
import { Link } from 'react-router-dom';


function Nav({loginClicked, signupClicked}) {
    const[toggle, setToggle]= useState(false);

    const toggleClick=()=>{
        setToggle(!toggle)
        console.log(toggle)
    }

  return (
    <div className=' fixed h-20 md:h-24 '>
        <div className=' bg-gray-400 nav__bar w-full h-20 fixed flex flex-row items-center justify-between p-6'>
          
         <div className=' text-3xl font-semibold'>
            <span className=' text-blue-600 text-5xl font-semibold'>E</span>duMentor
         </div>
    
         <div className='flex flex-row items-center justify-end md:w-8/12'>
            <div className=' nav__elements md:flex flex-row items-center text-lg md:text-4vh '>
               <ul className=' uppercase font-bold' >
                    <li className=' float-right m-4'> <button onClick={loginClicked} className=' transition-all duration-300 border-2 bg-blue-600 hover:bg-white text-white hover:text-black h-10 rounded-sm w-20'>Login </button> </li>
                    <li className=' float-right m-4'> <button onClick={signupClicked} className=' transition-all duration-300 border-2 bg-white hover:bg-blue-600 text-black hover:text-white h-10 rounded-sm w-20'>Sign  </button> </li>
                    <li className=' float-right m-4'> <Link to ='course' className=''>Course </Link> </li>
                    <li className=' float-right m-4'> <Link to ='about' className=''>About </Link> </li>
                    <li className=' float-right m-4'> <Link to ='/' className=''>Home </Link>    </li>
               </ul>
                <span className='block md:hidden toggle text-4xl' onClick={toggleClick}>
                    { toggle ?  <IoMdClose/>: <FiAlignRight/>}
                    
                </span>
            </div>
        </div>
      </div>

      <div className={`${toggle ?'mob__nav-slideOut': 'mob__nav-slideIn'} mob__nav z-50`}>
        <ul>
            <li> <Link to='/'>Home</Link>   </li>
            <li> <Link to='/about'> About </Link>  </li>
            <li> <Link to='/course'> Course </Link>  </li>
            <li> <button onClick={signupClicked}> SIGNIN </button></li>
            <li> <button onClick={loginClicked}> LOGIN </button></li>
        </ul>

      </div>

    </div>
  )
}

export default Nav