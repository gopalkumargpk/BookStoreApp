import React from 'react';
import Home from './Home/Home';
import Course from './components/Course';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovide';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/course' element={authUser ? <Course /> : <Navigate to="/signup" />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
