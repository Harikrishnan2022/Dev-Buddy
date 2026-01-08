import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/header'
import Login from './components/login'
import Footer from './components/footer'

function App() {
  

  return (
    <div className="w-full h-screen bg-gray-900">
        <Header></Header>
        <Login></Login>
        
    </div>
  )
}

export default App

