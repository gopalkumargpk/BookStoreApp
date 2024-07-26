import React from 'react';
import Home from './Home/Home';
import Course from './components/Course';
import{ BrowserRouter,Route, Routes }from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        
        </Routes>
    </>
  );
}

export default App;
