import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import useAuth from './hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate =useNavigate()
  const {user}= useAuth()
  console.log(user);
if (!user) {
  navigate("/login")
}
  return (
    <div className='bg-[#ffadd2] min-h-screen'>
      <Navbar></Navbar>
      <h1>Vite + React</h1>
      
    </div>
  )
}

export default App
