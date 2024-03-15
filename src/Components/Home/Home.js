import React from 'react'
import Welcome from './Welcome'
import Material from './Material'
import './Home.css'
import Courses from './Courses'
import ExploreCourses from './ExploreCourses'
import WelcomePage from './WelcomePage'
import PopularSubjects from './PopularSubjects'
import Sponsers from './Sponsers'
import Feedback from './Feedback'

function Home() {
  return (
    <div className=' relative top-24 -z-10'>
      <WelcomePage/> 
      <Sponsers/>
      <Courses/>
      <PopularSubjects/>
      <ExploreCourses/>
      <Material/>
      <Feedback/>

    </div>
  )
}

export default Home