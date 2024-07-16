import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#ffadd2] min-h-screen'>
      <Navbar></Navbar>
      <h1>Vite + React</h1>
      
    </div>
  )
}

export default App
