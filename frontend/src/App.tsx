import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Login from './components/login'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen ">
        <Header></Header>
        <Login></Login>
        
    </div>
  )
}

export default App
