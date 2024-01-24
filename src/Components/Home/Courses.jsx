import React,{useEffect, useRef, useState} from 'react'

function Courses() {

  const [animationTriggered, setAnimationTriggered] = useState(false);

 
    const counters = {
      courses: 40,
      students: 1500,
      followers: 1000000,
    };
  
    const counterRefs = {
      courses: useRef(null),
      students: useRef(null),
      followers: useRef(null),
    };
  
    const startCountAnimation = () => {
      Object.keys(counters).forEach((key) => {
        const target = counters[key];
        const ref = counterRefs[key].current;
        let count = 0;
  
        const animation = setInterval(() => {
          count += Math.ceil(target / 1000); // You can adjust the speed of the animation by changing the division value
          ref.textContent = count;
  
         
        if (count >= target) {
          clearInterval(animation);
          ref.textContent = target; // Ensure the final count is accurate
        }
      }, 10);
    });
  };
 
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered && window.scrollY > 300) {
        setAnimationTriggered(true);
        startCountAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);


  return (
    <div className=' courses_page w-full p-10 mt-20 md:mt-60 flex justify-center'>
        <div className='p-4 md:w-10/12 '>
          <section className=' flex flex-row text-pink-700 items-center justify-evenly text-xl gap-4 md:text-4xl font-serif'>
              <div className='flex flex-col'><span>Courses </span>   <span ref={counterRefs.courses} className=' font-extrabold   md:text-5xl'></span> </div>
              <div className='flex flex-col'><span>Students </span>  <span ref={counterRefs.students} className=' font-extrabold  md:text-5xl'></span> </div>
              <div className='flex flex-col'><span>Followers </span> <span ref={counterRefs.followers} className=' font-extrabold md:text-5xl'></span> </div>
  
          </section>
        </div>

    </div>
  )
}

export default Courses