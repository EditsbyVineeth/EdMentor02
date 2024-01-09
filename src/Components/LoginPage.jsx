import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";


function LoginPage({loginClicked}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClear=()=>{
    setPassword("")
  }



  return (
    <div className=' fixed flex bg-transparent items-center justify-center w-full mt-20 h-auto  px-32  md:py-20 '>
    
      <div className='login_form text-xl   mt-20 left-1/2 top-24 md:top-36 '>
        <span className='flex justify-end text-3xl p-4' > <IoMdClose onClick={loginClicked}/></span>
        <div className='p-10'>
          <h2 className=' text-center font-bold'>Login</h2>
          <br/>
          <form onSubmit={loginClicked}>
            <div>
              <label>Username</label>
              <input
                type="text" className='px-4 ml-4  w-44  md:w-60 text-black'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br/>
            <div>
              <label>Password</label>
              <input
                type="password" className='px-4 ml-5 w-44  md:w-60 text-black'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={loginClicked}  className=' w-20 md:w-24 md:p-2 mt-4 bg-blue-600 border-2 hover:text-white rounded-md'>Login</button>
            <button type='button' onClick={handleClear}  className=' w-20  md:w-24 md:p-2 ml-4 rounded-md border-2 hover:text-white bg-blue-600'>Clear</button>
          </form>
          </div>
          
       </div>
    </div>
  );
}

export default LoginPage;
