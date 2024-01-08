import React from 'react'
import Welcome from './Welcome'
import Material from './Material'
import './Home.css'
import Courses from './Courses'
import ExploreCourses from './ExploreCourses'

function Home() {
  return (
    <div className=' relative top-32 -z-10'>
      <Welcome/>
      <Courses/>
      <ExploreCourses/>
      <Material/>

    </div>
  )
}

export default Home