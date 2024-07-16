import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import useAuth from './hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Functions from './components/Functions'

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
      <div className='container mx-auto p-4 mt-20 '>
        <Functions></Functions>
      </div>
    </div>
  )
}

export default App
