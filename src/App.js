import './App.css';
import { useState } from 'react';
import AboutSection from './Components/About/AboutSection';
import CoursePage from './Components/Courses/CoursePage';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/Navbar/Nav';
import { HashRouter as Router, Routes ,Route } from 'react-router-dom';



import School from './Components/Data/School.json'
import Graduation from './Components/Data/Graduation.json'
import Skills from './Components/Data/Skills.json'
import Finance from './Components/Data/Finance.json'
import MoneyManagement from './Components/Data/MoneyManagement.json'
import StockMarket from './Components/Data/StockMarket.json'

import CourseCard from './Components/Courses/CourseCard.jsx';
import schoolImg from './images/blogs/1.jpg'
import skillsImg from './images/blogs/3.jpg'
import money from './images/blogs/money.png'
import stock from './images/blogs/stocks.png'
import graduationImg from './images/blogs/8.jpg'
import ScrollFunctionality from './Components/ScrollFunctionality.js';
import LoginPage from './Components/LoginPage.jsx';
import SignUp from './Components/SignUp.jsx';

import { useAppContext } from './Components/AppContext.js';
import SearchResult from './Components/Courses/SearchedCourses.jsx';


function App() {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    const{searchTerm} = useAppContext();

    console.log('value accessed in the App.js ',searchTerm)

    const handleLogin=()=>{
           setLogin(!login)
           console.log(login)
    }
    const handleSignUp=()=>{
           setSignup(!signup)
           console.log(signup)
    }

  return (

        <Router>
      
      <div className="App flex flex-col">
          <Nav loginClicked={handleLogin} signupClicked={handleSignUp}/>
            
        <span  className={`${login ? 'block' :'hidden'}`}>
           <LoginPage loginClicked={handleLogin}/>
        </span>
        <span  className={`${signup ? 'block' :'hidden'}`}>
            <SignUp signupClicked={handleSignUp}/>
        </span>
        
            {searchTerm ?   <SearchResult/>  :

           <>
          <ScrollFunctionality/>
         <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='about' element={<AboutSection/> } />

          <Route path='course' element={<CoursePage/> } >
          <Route path='' element={<CourseCard CourseTitle={"Courses for School Students"} img={schoolImg} data={School}/>} />
          <Route path='skills' element={<CourseCard CourseTitle={"Enroll Various Skill Learning Activities"} img={skillsImg} data={Skills}/>} />
          <Route path='graduation' element={<CourseCard CourseTitle={"Explore Courses for College Students"} img={graduationImg} data={Graduation}/>} />
          <Route path='finance' element={<CourseCard CourseTitle={"Learn Finance"} img={graduationImg} data={Finance}/>} />
          <Route path='moneymanagement' element={<CourseCard CourseTitle={"Learn Money Management"} img={money} data={MoneyManagement}/>} />
          <Route path='stockmarket' element={<CourseCard CourseTitle={"Stock Market and Analysis"} img={stock} data={StockMarket}/>} />

          </Route>

         </Routes>   

         </> 
         }
    

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
