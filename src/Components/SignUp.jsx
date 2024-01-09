import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";


function SignUp({signupClicked}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClear=()=>{
    setPassword("")
  }

  return (
    <div className=' fixed flex bg-transparent items-center justify-center w-full mt-20 h-auto p-4 px-20'>
    
      <div className='signup_form text-xl  mt-12 left-1/2 top-16 md:top-24 '>
        <span className='flex justify-end text-xl md:text-3xl p-4' > <IoMdClose onClick={signupClicked}/></span>
        <div className='p-10'>
          <h2 className=' text-center font-bold'>SignUp</h2>
          <br/>
          <form onSubmit={signupClicked}>
            <div>
              <div className='flex flex-col'>
                <label>First Name</label>
                <input
                  type="text" className='px-4 ml-4 w-44 md:w-60 text-black'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label>Second Name</label>
                <input
                  type="text" className='px-4 ml-4 mt-2 w-44 md:w-60 text-black'
                />
              </div>
            </div>
            <br/>
            <div className='flex flex-col'>
              <label>Password</label>
              <input
                type="password" className='px-4 ml-5 w-44 md:w-60 text-black'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

           <span className=' flex flex-row m-4'>
              <button type="submit" onClick={signupClicked}  className=' w-24  bg-blue-600 border-2 hover:text-white rounded-md md:p-2'>Login</button>
              <button type='button' onClick={handleClear}  className=' w-24  md:p-2 ml-4 rounded-md border-2 hover:text-white bg-blue-600'>Clear</button>
            
           </span>
          </form>
          </div>
          
       </div>
    </div>
  );
}

export default SignUp;
