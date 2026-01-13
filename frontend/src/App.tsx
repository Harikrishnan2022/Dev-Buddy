import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Login from './components/login'
import CodeEditor from './codeEditor/codeEditor'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {app } from "./firebase/firebase";
import "./App.css";
import Footer from './components/footer'
import SignupPage from './components/signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
const auth = getAuth (app);



function App() {

  return (

    

    <div className="w-full h-screen bg-gray-900">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Navigate to="codeEditor" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/codeEditor" element={<CodeEditor/>}></Route>
        </Routes>
        <Footer></Footer>
       
    </div>

  )
}

export default App

