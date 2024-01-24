import React from 'react'
import SponserData from '../Data/CompanyLogos.json'

import company1 from '../../images/Companies/1.png'
import company2 from '../../images/Companies/2.png'
import company3 from '../../images/Companies/3.png'
import company4 from '../../images/Companies/4.png'
import company5 from '../../images/Companies/5.png'

function Sponsers() {
  return (
    <div className='flex flex-col justify-center border-b-2  mt-36 border-orange-100'>
      <div className=' text-3xl text-center font-serif'> Learn from <span className='text-5xl'>200+</span> top companies in the World</div>
      <div className=' flex flex- justify-center items-center h-36'>

          <div className=' h-20 w-36 mx-4 object-cover'> <img src={company1} alt='companies' className='' />  </div> 
          <div className=' h-20 w-36 mx-4 object-cover'>  <img src={company2} alt='companies' className='' />  </div>
          <div className=' h-20 w-36 mx-4 object-cover'>  <img src={company3} alt='companies' className='' />  </div>
          <div className=' h-20 w-36 mx-4 object-cover'>  <img src={company4} alt='companies' className='' />  </div>
          <div className=' h-20 w-36 mx-4 object-cover'>  <img src={company5} alt='companies' className='' />  </div>        

      </div>
      

    </div>
  )
}

export default Sponsers